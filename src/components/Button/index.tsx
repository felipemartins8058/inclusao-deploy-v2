"use client";
import React, {useContext} from "react";
import * as S from "./styles";
import { BtnText } from "@/styles/Fonts";
import { FaLongArrowAltRight, FaExternalLinkAlt, FaEdit } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { ThemeContext } from "@/app/App";

import Theme from "@/utils/useThemeProvider";
import { useFontStore } from "../header/header";

interface ButtonProps {
    link: string;
    label?: string;
    variant?: string;
    color?: string;
    outline?: boolean;
}

interface SubmitButtonProps {
    label: string;
    variant?: string;
    color?: string;
    outline?: boolean;
}

interface IconButtonProps {
    handleOnClick: any;
    variant?: string;
    color?: string;
    label?: string;
    outline?: boolean;
}

function iconVariant(variant?: string, color?: string) {
    const IconVariant =
        variant == "login" ? (
            <BiLogIn size={22} color={color} />
        ) : variant == "externalLink" ? (
            <FaExternalLinkAlt size={19} color={color} />
        ) : variant == "noIcon" ? null : (
            <FaLongArrowAltRight size={22} color={color} />
        );
    return IconVariant;
}

export function LinkButton({
    link,
    label = "Saiba mais",
    variant,
    color = Theme().color_background_blue,
    outline = false,
}: ButtonProps) {
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -6) {
        calculatedSize = -6;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    return (
        <Link href={link}>
            <S.Button outline={outline}>
                <BtnText fontSize={18 + calculatedSize} color={color}>{label}</BtnText>
                {iconVariant(variant, color)}
            </S.Button>
        </Link>
    );
}

export function EditButton({
    handleOnClick,
    variant,
    label,
    color = Theme().color_background_blue,
    outline = false
}: IconButtonProps) {
    return (
        <S.EditButton outline={outline} onClick={() => { handleOnClick() }} aria-label="Botão de edição">
            {!!label ? (
                <BtnText color={color}>{label}</BtnText>
            ) : (null)}
            <MdModeEditOutline size={16} color={color} />
        </S.EditButton>
    );
}

export function SubmitButton({
    variant,
    label,
    color = Theme().color_button,
    outline = false,
}: SubmitButtonProps) {
    const selectedTheme = useContext(ThemeContext)
    let selectedColor = selectedTheme == 'defaultTheme' ? color : Theme().color_button
    return (
        <S.Button type={'submit'} outline={outline}>
            {!!label ? (
                <BtnText color={selectedColor}>{label}</BtnText>
            ) : (null)}
            {iconVariant(variant, selectedColor)}
        </S.Button>
    );
}
