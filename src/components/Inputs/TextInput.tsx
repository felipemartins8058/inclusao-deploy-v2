import React from 'react'
import * as S from './styles'
import { H5 } from '@/styles/Fonts'
import { useFontStore } from '../header/header';

interface TextInputProps {
    label: string;
    placeholder: string;
    value?: string;
    handleSetElement?: any;
    register?: any;
}

export default function TextInput({ label, placeholder, register }: TextInputProps) {
    
    return (
        <S.FormGroup aria-label={'input ' + label}>
            <H5 marginBottom='0.5' >{label}</H5>
            <S.TextInput placeholder={placeholder} {...register} required aria-invalid={false} />
        </S.FormGroup>
    )
}