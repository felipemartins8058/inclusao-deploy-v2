'use client'
import Image from "next/image";
import { H1, Text } from "../../styles/Fonts";
import * as S from "./styles";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Theme from "@/utils/useThemeProvider";
import { fakeCardsInfo } from "@/services/api";

export default function Informativos() {
    return (
        <main aria-label="Página Conteúdo Informativo">
            <S.InfortativosSection>
                <Title
                    title="Confira o nosso conteúdo informativo"
                    color={Theme().color_background_yellow}
                />
                <Text marginBottom="3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.</Text>
                <S.InformativosGrid aria-label='grade de cartõed'>
                {fakeCardsInfo.map((card) => (
                            <Card
                                link="/"
                                ariaLabel={card.aria_label}
                                imageAlt={card.image_alt}
                                title={card.titulo}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum."
                                color={Theme().color_background_yellow}
                                image={card.imagem[0].path}
                                openModal={()=>{}}
                            />
                        ))}
                </S.InformativosGrid>
            </S.InfortativosSection>
        </main>
    );
}
