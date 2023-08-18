###################
# BUILD PARA DESENVOLVIMENTO LOCAL
###################

# Usa uma imagem leve do Node.js como base
FROM node:18.14.2-alpine AS dev

# Cria a pasta de Upload
RUN mkdir -p /data/upload
RUN chown -R node:node /data

# Alterna para o usuário "node" por motivos de segurança
USER node

# Define o diretório de trabalho como /usr/src/app
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.yaml para o contêiner
COPY --chown=node:node package*.json ./

# Executa o comando npm ci para instalar as dependências
RUN npm ci

# Copia o restante do código da aplicação para o contêiner
COPY --chown=node:node . /usr/src/app

# Expõe a porta 8080
EXPOSE 8080

CMD ["npm", "run", "dev"]

###################
# BUILD PARA PRODUÇÃO
###################

# Cria um novo estágio de build
FROM node:18.14.2-alpine AS build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Cria a pasta de Upload
RUN mkdir -p /data/upload
RUN chown -R node:node /data

# Alterna para o usuário "node" por motivos de segurança
USER node

# Define o diretório de trabalho como /app
WORKDIR /app

# Copia os arquivos package.json e package-lock.yaml para o contêiner
COPY --chown=node:node package*.json ./

# Executa o comando npm ci para instalar as dependências
RUN npm ci

# Copia o restante do código da aplicação para o contêiner
COPY --chown=node:node . .

# Compila a aplicação usando o npm
RUN npm run build

###################
# PRODUÇÃO
###################

# Cria um novo estágio de produção
FROM node:18.14.2-alpine AS prod

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN npm install next@13.4.6

# Expõe a porta 8080
EXPOSE 8080

USER nextjs

# Inicia a aplicação
CMD ["npm", "run", "start"]
