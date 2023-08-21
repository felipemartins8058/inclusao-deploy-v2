"use client";
import React from "react";
import * as S from "./styles";
import { H3, Text } from "@/styles/Fonts";
import grid from "../../assets/images/grid.png";
import image6 from "../../assets/images/image6.png";
import Image from "next/image";
import { EditButton, LinkButton } from "../Button";
import { useFontStore } from "../header/header";

interface CardProps {
    title: string;
    text: string;
    image: string;
    color: string;
    link: string;
    openModal: any;
    ariaLabel: string;
    imageAlt: string;
    className?: string;
}

export default function Card({ title, text, image, color, link, openModal, ariaLabel, imageAlt }: CardProps) {
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -4) {
        calculatedSize = -4;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    return (
        <S.Card className="keen-slider__slide" aria-label={ariaLabel}>
            {/* <EditButton handleOnClick={openModal} /> */}
            <S.CardImage>
                <S.CardImageBackground color={color} />
                <S.CardImageGrid>
                    <Image src={grid} alt="Fundo" />
                </S.CardImageGrid>
                <S.CardImageBox>
                    <img src={image} alt={imageAlt} />
                </S.CardImageBox>
            </S.CardImage>
            <S.Content>
                <H3 fontSize={28 + calculatedSize}>{title}</H3>
                <Text fontSize={16 + calculatedSize}>
                    {text}
                </Text>
                <LinkButton link={link} color={color} />
            </S.Content>
        </S.Card>
    );
}
