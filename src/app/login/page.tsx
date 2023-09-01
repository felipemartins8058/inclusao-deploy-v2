"use client";
import React, { useContext } from "react";
import * as S from "./styles";
import * as F from "@/styles/Fonts";
import { H5 } from "../../styles/Fonts";
import Title from "@/components/Title";
import TextInput from "@/components/Inputs/TextInput";
import { SubmitButton } from "@/components/Button";
import { GridSquare } from "@/components/gridSquares/gridSquares";
import Theme from "@/utils/useThemeProvider";
import { ZodType, set, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFontStore } from "@/components/header/header";
import { Api } from "@/services/Api";
import { AuthContext } from "@/services/AuthProvider";
import getLoggedUser from "@/services/UserLogged";

import useUserStore from "@/stores/useUser";

type LoginFormData = {
    emailInput: string;
    password: string;
};

export default function Login() {

    const router = useRouter();
    const { setAuth } = useContext(AuthContext);

    const schema: ZodType<LoginFormData> = z.object({
        emailInput: z.string().email(),
        password: z.string().min(6),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -6) {
        calculatedSize = -6;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    const setLoggedUser = useUserStore((state) => state.addUser)
    const getLoggedUserSte = useUserStore((state) => state.user)

    async function loginTeste({emailInput, password}: {emailInput: string, password: string}){
        try {
            const response = await Api.post("/auth", {email: emailInput, senha: password});
            const acessToken = response.data.data.accessToken;
            const roles = response.data.data?.roles ? response.data.data.roles : 'user';
            const {email, idUsuario} = await getLoggedUser({acessToken});

            setLoggedUser({email, idUsuario,acessToken, roles});

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    async function handleLogin(data: LoginFormData) {
        //data.preventDefault()
        loginTeste(data)
    }
    return (
        <S.MainLogin aria-label="Página de Login">
            <S.LoginWrapper aria-label="Realize login na plataforma">
                <div>
                    <Title
                        title="Login na Plataforma"
                        color={Theme().color_background_purple}
                    />
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        aria-label="formulário de login"
                    >
                        <TextInput
                            label="EMAIL"
                            placeholder="Digite seu email"
                            register={{ ...register("emailInput") }}
                        />
                        {errors.emailInput && (
                            <F.Text color="var(--dark-pink)">
                                email inválido
                            </F.Text>
                        )}
                        <TextInput
                            label="SENHA"
                            placeholder="Digite sua senha"
                            register={{ ...register("password") }}
                        />
                        {errors.password && (
                            <F.Text color="var(--dark-pink)">
                                Senha inválida
                            </F.Text>
                        )}
                        <SubmitButton
                            label="Acessar a plataforma"
                            variant="login"
                            color={Theme().color_background_purple}
                        />
                    </form>
                </div>
                <div>
                    <GridSquare />
                </div>
            </S.LoginWrapper>
        </S.MainLogin>
    );
}
