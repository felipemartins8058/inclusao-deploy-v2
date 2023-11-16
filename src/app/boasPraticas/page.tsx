"use client";
import { useState } from "react";
import Title from "@/components/Title";
import { Text } from "../../styles/Fonts";
import * as S from "./boasPraticas";
import Theme from "@/utils/useThemeProvider";
import { MdSearch } from "react-icons/md";
import CardDark from "@/components/CardDark";
import CardCollapsable from "@/components/CardCollapsable";
import Card from "@/components/Card";
import SearchInput from "@/components/Inputs/SearchInput";

export default function BoasPraticas() {

    const [caracteristicas, setCaracteristicas] = useState([
        {
            id: 1,
            icone: "icone",
            titulo: "Caracteristica",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.",
        },
        {
            id: 2,
            icone: "icone",
            titulo: "Caracteristica",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.",
        },
        {
            id: 3,
            icone: "icone",
            titulo: "Caracteristica",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.",
        },
        {
            id: 4,
            icone: "icone",
            titulo: "Caracteristica",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.",
        },
        {
            id: 5,
            icone: "icone",
            titulo: "Caracteristica",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.",
        },
    ]);

    const [boasPraticas, setBoasPraticas] = useState([
        {
            id: 1,
            titulo: "Pergunta para identificar",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. ",
        },
        {
            id: 2,
            titulo: "Pergunta para identificar",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. ",
        },
        {
            id: 3,
            titulo: "Pergunta para identificar",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. ",
        },
        {
            id: 4,
            titulo: "Pergunta para identificar",
            conteudo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum. ",
        },
    ]);

    const [cardBoasPraticas, setCardBoasPraticas] = useState([
        { id: 1, icone: "icone", titulo: "Comunicação", botao: "Acessar" },
        { id: 2, icone: "icone", titulo: "Infraestrutura", botao: "Acessar" },
        { id: 3, icone: "icone", titulo: "Na escola", botao: "Acessar" },
        { id: 4, icone: "icone", titulo: "Comunicação", botao: "Acessar" },
        { id: 5, icone: "icone", titulo: "Comunicação", botao: "Acessar" },
    ]);

    const [selectedCollapse, setSelectedCollapse] = useState(0);

    return (
        <main>
            <S.SectionWrapper>
                <S.TitleDiv aria-label="Seção de boas práticas">
                    <Title
                        title="Boas Práticas"
                        color={Theme().color_background_blue}
                    />
                    <Text >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum.
                    </Text>
                </S.TitleDiv>
                <S.CardsCaracteristicasDiv aria-label="Seção de cards de boas práticas">
                    {caracteristicas.map((caracteristicas) => (
                        <CardDark
                            id={caracteristicas.id}
                            title={caracteristicas.titulo}
                            description={caracteristicas.conteudo}
                            icon={caracteristicas.icone}
                        />
                    ))}
                </S.CardsCaracteristicasDiv>
            </S.SectionWrapper>
            <S.SectionWrapper>
                <S.ItemsBoasPraticaDiv aria-label="Seção de perguntar para identificar as boas práticas">
                    <Title
                        title="Perguntas para identificar uma boa prática"
                        color={Theme().color_background_green}
                    />
                    {boasPraticas.map((boasPraticas) => (
                        <CardCollapsable
                            id={boasPraticas.id}
                            title={boasPraticas.titulo}
                            content={boasPraticas.conteudo}
                            selectedCollapse={selectedCollapse}
                            setSelectedCollapse={setSelectedCollapse}
                        />
                    ))}
                </S.ItemsBoasPraticaDiv>
            </S.SectionWrapper>
            <S.BancoBoasPraticasDiv>
                <S.SectionWrapper>
                    <S.TopSection aria-label="Seção sobre temas de inclusão">
                        <Title
                            title="Já ouviu falar de inclusão?"
                            color={Theme().color_background_purple}
                            darkBackground={true}
                        />
                        <SearchInput/>
                    </S.TopSection>
                    <Text color={Theme().color_text_light}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam pulvinar felis id hendrerit congue. Aliquam
                        pulvinar felis id hendrerit congue.
                    </Text>
                    <S.BancoCardsDiv>
                        {cardBoasPraticas.map((cardBoasPraticas) => (
                            <Card link="" />
                        ))}
                    </S.BancoCardsDiv>
                </S.SectionWrapper>
            </S.BancoBoasPraticasDiv>
        </main>
    );
}
