"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import * as S from "./styles";
import { H1, Text } from "../styles/Fonts";
import Title from "@/components/Title";
import Card from "@/components/Card";

import placeholder from "../assets/images/placeholderSelo.svg";
import selo from "../assets/images/seloInclusao.svg";
import { Hero } from "@/components/hero/hero";
import { Experience } from "@/components/experience/experience";
import { Apresentation } from "@/components/apresentation/apresentation";
import { EditButton } from "@/components/Button";
import { ModalCard } from "@/components/Modal/Modal";
import { fakeCardsInfoHighlight } from "@/services/api";

import Theme from "@/utils/useThemeProvider";
import { useFontStore } from "@/components/header/header";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';

import {ThemeContext} from '../app/App'

// const animation = { duration: 15000, easing: (t: number) => t }

export default function Home() {

    const [sliderCardRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 1200px) and (min-width: 1024px)": {
                slides: { perView: 3, spacing: 15 },
            },
            "(max-width: 1024px) and (min-width: 768px)": {
                slides: { origin: "center", perView: 2, spacing: 15 },
            },
            "(max-width: 768px) and (min-width: 480px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(max-width: 480px) and (min-width: 320px)": {
                slides: { perView: 1, spacing: 10 },
            },
            "(max-width: 320px)": {
                slides: { perView: 1, spacing: 10 },
            },
        },
    })

    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -4) {
        calculatedSize = -4;
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

    const selectedTheme = useContext(ThemeContext)

    return (
        <main aria-label="Página Inicial">
            <Hero />
            <S.LetteringSection aria-label="letreiro">
                {
                    //TODO: Improve infinite lettering logic
                }
                <S.LetteringWrapper ref={letteringRef} >
                    {letteringPattern()} {letteringPattern()}
                </S.LetteringWrapper>
            </S.LetteringSection>
            <S.CardsSection aria-label="seção:já ouviu falar de inclusão?"  >
                <S.CardsSectionWrapper >
                    <Title
                        title="Já ouviu falar de inclusão?"
                        color={Theme().color_background_blue}
                        darkBackground={true}
                    />
                    <Text fontSize={16 + calculatedSize} color={Theme().color_text_light}>
                    Junte-se a nós na missão de avaliar e aprimorar a Educação Inclusiva.
                    </Text>
                    <S.CardsGrid className="keen-slider" ref={sliderCardRef} aria-label="grade de cartões">
                        {fakeCardsInfoHighlight.map((card, index) => (
                            <Card
                                key={index}
                                className="keen-slider__slide"
                                link="/"
                                ariaLabel={card.aria_label}
                                imageAlt={card.image_alt}
                                title={card.titulo}
                                text={card.resumo_texto}
                                color={selectedTheme == 'defaultTheme' ? Theme().color_background_blue : Theme().color_button}
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
                    <EditButton
                        handleOnClick={() => { }}
                        label="Editar"
                        outline={true}
                        color={Theme().color_text}
                    />
                    <div>
                        <Title
                            title="O que é o selo inclua?"
                            color={Theme().color_background_purple}
                            darkBackground={true}
                        />
                        <Text fontSize={16 + calculatedSize} color={Theme().color_text_light}>
                        Nossa ferramenta é a chave para promover mudanças positivas na educação, avaliando práticas e impulsionando transformações efetivas. Introduzimos um selo para quantificar e planejar a implementação de práticas que tornem a educação genuinamente inclusiva, potencializando a diversidade e a equidade em todo o processo. Sabemos que são mudanças estruturais importantes, então criar métricas potentes será essencial para as transformações que tanto precisamos na educação.
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
