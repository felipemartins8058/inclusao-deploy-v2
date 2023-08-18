'use client'
import React from "react"
import * as S from './styles'

import Theme from "@/utils/useThemeProvider"
import { useFontStore } from "../header/header";

interface TitleProps {
    title: string;
    color: string;
    darkBackground?: boolean;
}

export default function Title({ title, color, darkBackground = false }: TitleProps) {
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -16) {
        calculatedSize = -16;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    return (
        <S.TitleWrapper>
            <S.Square color={color} />
            <S.TextBox>
                <S.H2 fontSize={32 + calculatedSize} darkBackground={darkBackground} color={Theme().color_text} marginbottom="0" >{title}</S.H2>
            </S.TextBox>
        </S.TitleWrapper>
    )
}