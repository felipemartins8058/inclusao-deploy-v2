"use client";
import React, {useContext, useState} from "react";
import * as S from "./styles";
import { H3, Text } from "@/styles/Fonts";
import grid from "../../assets/images/grid.png";
import Image from "next/image";
import { EditButton, LinkButton } from "../Button";
 interface CardProps {
    title?: string;
    text?: string;
    autor?:string;
    image?: string;
    iconeMessage?: string;
    color?: string;
    link: string;
    textlink?: string;
    openModal?: any;
    ariaLabel?: string;
    imageAlt?: string;
    iconeAlt?: string;
    className?: string;
    stars?: number;
    messages?: number;
}

type Props = {
    isActive: boolean
}

const Star = ({isActive}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='1rem' height='1rem' viewBox="0 0 576 512" fill={isActive ? "#FFC107": "#ccc"}>
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
    )
}

export default function Card({ title, text, autor, stars, messages, image, iconeMessage, color, link, openModal, ariaLabel, imageAlt, iconeAlt }: CardProps) {
    const [ activeIndex, setActiveIndex] = useState<number>(3);

    const items: number[] = [...new Array(5).keys() as any]

    return (
        <S.Card className="keen-slider__slide" aria-label={ariaLabel}>
            {/* <EditButton handleOnClick={openModal} /> */}
            <EditButton handleOnClick={openModal} />
            <S.CardImage>
                <S.CardImageBackground color={color} />
                <S.CardImageGrid>
                    <Image src={grid} alt="Fundo" />
                </S.CardImageGrid>
                <S.CardImageBox>
                    <img src={image} alt={imageAlt} />
                </S.CardImageBox>
            </S.CardImage>
            <S.InfoCardDiv>     
                <S.AvaliationContent>
                    {items.map(index => <Star key={`star_${index}`} isActive={index <= activeIndex!}/>)}
                </S.AvaliationContent>
                <S.MessageDiv>
                    <img src={iconeMessage} alt={iconeAlt} /> 
                    {messages}
                </S.MessageDiv>
            </S.InfoCardDiv>
            <S.Content>
                <H3 >{title}</H3>
                <Text >
                    {text}
                </Text>
                <LinkButton label="Ver prática" link={link} color={color} />
            </S.Content>
        </S.Card>
    );
}
