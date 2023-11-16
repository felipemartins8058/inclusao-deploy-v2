'use client'
import React from "react"
import * as S from './styles'

import Theme from "@/utils/useThemeProvider"
interface TitleProps {
    title: string;
    color: string;
    darkBackground?: boolean;
}

export default function Title({ title, color, darkBackground = false }: TitleProps) {

    return (
        <S.TitleWrapper>
            <S.Square color={color} />
            <S.TextBox>
                <S.H2 darkBackground={darkBackground} color={Theme().color_text} marginbottom="0" >{title}</S.H2>
            </S.TextBox>
        </S.TitleWrapper>
    )
}