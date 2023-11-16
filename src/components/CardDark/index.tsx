import React from "react";
import * as S from "./darkCardStyles";
import { H2, Text } from "../../styles/Fonts";
import Theme from "@/utils/useThemeProvider";
import IconCaracteristicas from '../../assets/IconeCaracteristica'

interface Props {
    id?: number;
    title?: string;
    description?: string;
    icon?: string;
}

export default function CardDark({ id, title, description, icon }: Props) {
    return (
        <S.CardDiv key={id}>
            <IconCaracteristicas />
            <H2 color={Theme().color_text_light}>{title}</H2>
            <Text marginBottom="0" color={Theme().color_text_light}>
                {description}
            </Text>
        </S.CardDiv>
    );
}
