"use client";
import { useContext } from "react";
import {
    DivApresentation,
    DivInsideLeft,
    DivInsideLeftDivider,
    DivInsideRight,
    ColorBlock,
} from "./apresentationStyles";
import * as F from "../../styles/Fonts";
import ImageInclusionApresentation from "../../assets/images/imageApresentationYellow.svg";
import ImageInclusionApresentation2 from "../../assets/images/imageApresentationred.svg";
import ImageInclusionApresentation3 from "../../assets/images/imageApresentationPurple.svg";
import Title from "../Title";
import { EditButton } from "../Button";
import Theme from "@/utils/useThemeProvider";
import Image from "next/image";

export function Apresentation() {

    return (
        <DivApresentation aria-label="seção: o que é esta plataforma?">
            {/* <EditButton handleOnClick={() => { }} label='Editar' /> */}
            <EditButton handleOnClick={() => { }} label='Editar' />
            <DivInsideLeft>
                <ColorBlock color={Theme().color_background_yellow}>
                    <Image
                        src={ImageInclusionApresentation}
                        alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
                    />
                </ColorBlock>
                <DivInsideLeftDivider>
                    <ColorBlock color={Theme().color_background_green} />
                    <ColorBlock color={Theme().color_background_pink}>
                        <Image
                            src={ImageInclusionApresentation2}
                            alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
                        />
                    </ColorBlock>
                </DivInsideLeftDivider>
                <ColorBlock color={Theme().color_background_purple}>
                    <Image
                        src={ImageInclusionApresentation3}
                        alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
                    />
                </ColorBlock>
            </DivInsideLeft>
            <DivInsideRight>
                <Title
                    title="O que é a plataforma?"
                    color={Theme().color_background_green}
                />
                <F.Text>
                Para transformar a inclusão em realidade, não basta apenas refletir sobre as mudanças, precisamos agir e demonstrar com ações concretas nosso comprometimento. A sustentabilidade da inclusão é crucial para evitar retrocessos, e para isso, é fundamental que governos, empresas e instituições se unam em políticas públicas. Desenvolvemos uma plataforma poderosa de indicadores, alinhada com a Agenda 2030 da ONU e seu lema 'não deixe ninguém para trás'. Esta ferramenta é a chave para transferências positivas na educação, avaliando práticas e promovendo uma transformação efetiva, pautadas em evidências científicas.
                </F.Text>
            </DivInsideRight>
        </DivApresentation>
    );
}
