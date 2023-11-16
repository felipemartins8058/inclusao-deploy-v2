"use client";
import { styled } from "styled-components";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    outline?: boolean;
    fontSize?: number;
}

export const Button = styled.button<ButtonProps>`
    font-size: ${(props) => props.fontSize}px;
    border-radius: 4px;
    background: ${(props) =>
        props?.outline ? props.theme.color_background_button_light : props.theme.color_background_button_dark};
    border: ${(props) => (props.outline ? `1px solid ${props.theme.color_default_border}` : `1px solid ${props.theme.color_default_border}`)};
    padding: 0.5rem 1rem;
    cursor: pointer;    
    align-items: center;
    display: flex;
    gap: 0.5rem;
`;

export const EditButton = styled.button<ButtonProps>`
    position: absolute;
    display: flex;
    gap: 0.5rem;
    right: 1rem;
    top: 1rem;
    align-items: center;
    border-radius: 4px;
    background: ${(props) =>
        props?.outline ? props.theme.color_background_button_light : props.theme.color_background_button_dark};
    border: 1px solid ${(props) => props.theme.color_default_border};
    padding: 0.5rem;
    cursor: pointer;
    a {
        align-items: center;
        display: flex;
        gap: 0.5rem;
    }
    z-index: 100;
`;

export const ActionButton = styled.button<ButtonProps>`
    display: flex;
    gap: 0.5rem;
    right: 1rem;
    top: 1rem;
    align-items: center;
    border-radius: 4px;
    background: ${(props) =>
        props?.outline ? props.theme.color_background_button_light : props.theme.color_background_button_dark};
    border: 1px solid ${(props) => props.theme.color_default_border};
    padding: 0.5rem;
    cursor: pointer;
    a {
        align-items: center;
        display: flex;
        gap: 0.5rem;
    }
    z-index: 100;
`;
