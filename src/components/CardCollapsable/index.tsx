import React from "react";
import * as S from './cardCollapsableStyles'
import { H2, Text } from "../../styles/Fonts";
import { ActionButton } from "../Button";

interface CardCollapsableProps {
    id: number;
    title: string;
    selectedCollapse?: number;
    setSelectedCollapse?: any;
    content: string;
}

export default function CardCollapsable({id, title, selectedCollapse, setSelectedCollapse, content}: CardCollapsableProps) {
    return (
        <S.BoaPraticaDiv key={id}>
            <S.BoaPraticaSection>
                <H2>{title}</H2>
                <ActionButton handleOnClick={() => {setSelectedCollapse(id); console.log(`selectedCollapse: ${selectedCollapse}`)}} />
            </S.BoaPraticaSection>
            {selectedCollapse == id && <Text>{content}</Text>}
        </S.BoaPraticaDiv>
    );
}
