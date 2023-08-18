"use client";
import React from "react";
import * as S from "./styles";
import { BtnText } from "@/styles/Fonts";
import { FaLongArrowAltRight, FaExternalLinkAlt, FaEdit } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";

import Theme from "@/utils/useThemeProvider";

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
    return (
        <Link href={link}>
            <S.Button outline={outline}>
                <BtnText color={color}>{label}</BtnText>
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
        <S.EditButton outline={outline} onClick={() => {handleOnClick()}} aria-label="Botão de edição">
            {!!label ? (
                <BtnText color={color}>{label}</BtnText>
            ) : (null)}
            <MdModeEditOutline size={16} color={color}/>
        </S.EditButton>
    );
}

export function SubmitButton({
    variant,
    label,
    color = Theme().color_background_blue,
    outline = false,
}: SubmitButtonProps) {
    return (
        <S.Button type={'submit'} outline={outline}>
            {!!label ? (
                <BtnText color={color}>{label}</BtnText>
            ) : (null)}
            {iconVariant(variant, color)}
        </S.Button>
    );
}
