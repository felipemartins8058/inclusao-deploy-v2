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

    if (calculatedSize > 20) {
        calculatedSize = 20;
    }

    return (
        <S.FormGroup aria-label={'input ' + label}>
            <H5 fontSize={20 + calculatedSize} marginBottom='0.5' >{label}</H5>
            <S.TextInput fontSize={16 + calculatedSize} placeholder={placeholder} {...register} required aria-invalid={false} />
        </S.FormGroup>
    )
}