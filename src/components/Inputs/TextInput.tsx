import React from 'react'
import * as S from './styles'
import { H5 } from '@/styles/Fonts'
import { useFontStore } from '../header/header';

interface TextInputProps {
    label: string;
    placeholder: string;
    value?: string;
    handleSetElement?: any;
    register: any;
}

export default function TextInput({ label, placeholder, register }: TextInputProps) {
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;
    if (calculatedSize < -6) {
        calculatedSize = -6;
    }

    if (calculatedSize > 12) {
        calculatedSize = 12;
    }


    let calculatedSizeInput = fontSize * sizeIncrement

    if (calculatedSizeInput < -4) {
        calculatedSizeInput = -4;
    }

    if (calculatedSizeInput > 8) {
        calculatedSizeInput = 8;
    }


    return (
        <S.FormGroup aria-label={'input ' + label}>
            <H5 fontSize={20 + calculatedSize} marginBottom='0.5' >{label}</H5>
            <S.TextInput fontSize={16 + calculatedSizeInput} placeholder={placeholder} {...register} required aria-invalid={false} />
        </S.FormGroup>
    )
}