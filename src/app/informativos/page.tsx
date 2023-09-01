'use client'
import { useContext } from "react";
import Image from "next/image";
import { H1, Text } from "../../styles/Fonts";
import * as S from "./styles";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Theme from "@/utils/useThemeProvider";
import { fakeCardsInfo } from "@/services/Api";
import { ThemeContext } from "../App";
import { useFontStore } from "@/components/header/header";

export default function Informativos() {
    const selectedTheme = useContext(ThemeContext)

    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -4) {
        calculatedSize = -4;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    return (
        <S.MainInformativo aria-label="Página Conteúdo Informativo">
            <S.InfortativosSection>
                <Title
                    title="Confira o nosso conteúdo informativo"
                    color={Theme().color_background_yellow}
                />
                <Text fontSize={16 + calculatedSize} marginBottom="3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.</Text>
                <S.InformativosGrid aria-label='grade de cartõed'>
                    {fakeCardsInfo.map((card) => (
                        <Card
                            link="/"
                            ariaLabel={card.aria_label}
                            imageAlt={card.image_alt}
                            title={card.titulo}
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum."
                            color={selectedTheme == 'defaultTheme' ? Theme().color_background_yellow : Theme().color_button}
                            image={card.imagem[0].path}
                            openModal={() => { }}
                        />
                    ))}
                </S.InformativosGrid>
            </S.InfortativosSection>
        </S.MainInformativo>
    );
}
