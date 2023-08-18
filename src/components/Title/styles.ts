'use client'
import { styled } from "styled-components";

interface TitleH2Props {
    textAlign?: string;
    marginbottom?: string;
    darkBackground?: boolean;
    fontSize?: number;
}

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const TextBox = styled.div`
    margin-left: -2.5rem;
`

export const H2 = styled.h2<TitleH2Props>`
    font-style: normal;
    font-weight: 600;
    font-size: ${(props) => props.fontSize}px;
    //font-size: 2em;
    line-height: 39px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h1)};
    background: ${(props) => (props.color ? `${props.color}` : props.theme.color_h1)};
    background: ${(props) => props?.darkBackground ? `linear-gradient(90deg, ${props.theme.color_text} 2.5rem, ${props.theme.color_text_light} 2.5rem)` : ``};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginbottom ? `${props.marginbottom}rem` : `1rem`};
`;

export const Square = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 4px;
    background-color: ${(props) => props.color ? props.color : props.theme.color_background_blue};
`