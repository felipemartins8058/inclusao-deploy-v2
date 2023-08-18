"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import * as S from "./styles";
import { H1, Text } from "../styles/Fonts";
import Title from "@/components/Title";
import Card from "@/components/Card";

import placeholder from "../assets/images/placeholderSelo.png";
import selo from "../assets/images/seloInclusao.png";
import { Hero } from "@/components/hero/hero";
import { Experience } from "@/components/experience/experience";
import { Apresentation } from "@/components/apresentation/apresentation";
import { EditButton } from "@/components/Button";
import { ModalCard } from "@/components/Modal/Modal";
import { fakeCardsInfoHighlight } from "@/services/api";

import Theme from "@/utils/useThemeProvider";
import { useFontStore } from "@/components/header/header";

export default function Home() {
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -16) {
        calculatedSize = -16;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    const letteringRef = useRef<HTMLDivElement>(undefined!);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function scrollLettering() {
        letteringRef.current!.scrollLeft = window.scrollY * 0.5;
    }

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollLettering);
    }, []);

    return (
        <main aria-label="Página Inicial">
            <Hero />
            <S.LetteringSection aria-label="letreiro">
                {
                    //TODO: Improve infinite lettering logic
                }
                <S.LetteringWrapper ref={letteringRef}>
                    {letteringPattern()} {letteringPattern()}
                </S.LetteringWrapper>
            </S.LetteringSection>
            <S.CardsSection aria-label="seção:já ouviu falar de inclusão?">
                <S.CardsSectionWrapper>
                    <Title
                        title="Já ouviu falar de inclusão?"
                        color={Theme().color_background_blue}
                        darkBackground={true}
                    />
                    <Text color={Theme().color_text_light}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum.
                    </Text>
                    <S.CardsGrid aria-label="grade de cartões">
                        {/* <Card
                            link="/"
                            title="O que é inclusão?"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum."
                            color="var(--yellow)"
                            image=""
                            openModal={openModal}
                        /> */}
                        {fakeCardsInfoHighlight.map((card) => (
                            <Card
                                link="/"
                                ariaLabel={card.aria_label}
                                imageAlt={card.image_alt}
                                title={card.titulo}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum."
                                color={Theme().color_background_blue}
                                image={card.imagem[0].path}
                                openModal={() => { }}
                            />
                        ))}
                    </S.CardsGrid>
                </S.CardsSectionWrapper>
            </S.CardsSection>
            <Apresentation />
            <S.SeloSection aria-label="seção: o que é o selo inclua?">
                <S.SeloSectionWrapper>
                    {/* <EditButton
                        handleOnClick={() => { }}
                        label="Editar"
                        outline={true}
                        color={Theme().color_text}
                    /> */}
                    <div>
                        <Title
                            title="O que é o selo inclua?"
                            color={Theme().color_background_purple}
                            darkBackground={true}
                        />
                        <Text fontSize={16 + calculatedSize} color={Theme().color_text_light}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam pulvinar felis id hendrerit congue.
                            Morbi sollicitudin pulvinar enim id condimentum.
                            Proin semper, lorem ut commodo finibus, felis purus
                            eleifend mauris, vel vestibulum enim erat eget
                            purus. Praesent rutrum est id diam eleifend
                            scelerisque.
                        </Text>
                        <Text color={Theme().color_text_light}>
                            Proin semper, lorem ut commodo finibus, felis purus
                            eleifend mauris, vel vestibulum enim erat eget
                            purus. Praesent rutrum est id diam eleifend
                            scelerisque. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Aliquam pulvinar felis id hendrerit
                            congue. Morbi sollicitudin pulvinar enim id
                            condimentum. Proin semper, lorem ut commodo finibus.
                        </Text>
                    </div>
                    <S.SeloBox>
                        <S.SeloGrid>
                            <Image src={placeholder} alt="descrição da imagem/icone de inclusão" />
                            <Image src={placeholder} alt="descrição da imagem/icone de inclusão" />
                            <Image src={placeholder} alt="descrição da imagem/icone de inclusão" />
                            <Image src={placeholder} alt="descrição da imagem/icone de inclusão" />
                        </S.SeloGrid>
                        <S.SeloInclua>
                            <Image src={selo} alt="Selo de inclusão da plataforma: descrição do selo" />
                        </S.SeloInclua>
                    </S.SeloBox>
                </S.SeloSectionWrapper>
            </S.SeloSection>
            <Experience />
            {/* <ModalCard modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
        </main>
    );
}

function letteringPattern() {
    return (
        <>
            <S.Circle color={Theme().color_background_pink} />
            <S.LetteringFont>Inclusão</S.LetteringFont>
            <S.Circle color={Theme().color_background_purple} />
            <S.LetteringFont>Respeito</S.LetteringFont>
            <S.Circle color={Theme().color_background_green} />
            <S.LetteringFont>Equidade</S.LetteringFont>
            <S.Circle color={Theme().color_background_blue} />
            <S.LetteringFont>Diversidade</S.LetteringFont>
            <S.Circle color={Theme().color_background_yellow} />
            <S.LetteringFont>Oportunidade</S.LetteringFont>
        </>
    );
}
