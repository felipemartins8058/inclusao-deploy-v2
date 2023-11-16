'use client'
import styled from "styled-components";

interface TextProps {
    textAlign?: string;
    marginBottom?: string;
    fontSize?: number;
}

export const H1 = styled.h1<TextProps>`
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    zoom: 1.1;

    @media (min-width: 0px) {
        font-size: 2.5rem;
    }
    @media (min-width: 320px) {
            font-size: calc(2.5rem + (48 - 40) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
            font-size: 3rem;
    }
    
    //${(props) => props.fontSize}px;
    //font-size: 40px;
    //line-height: 49px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h1)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
    &.hero {
        margin-left: 1.5rem;
    }
`;

export const H2 = styled.h2<TextProps>`
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    zoom: 1.1;

    @media (min-width: 0px) {
        font-size: 2rem;
    }
    @media (min-width: 320px) {
            font-size: calc(2rem + (40 - 32) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
            font-size: 2.5rem;
    }
    
    //${(props) => props.fontSize}px;
    //font-size: 32px;
    //line-height: 39px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h2)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
`;

export const H3 = styled.h3<TextProps>`
    font-style: normal;
    font-weight: 500;
    font-size: 1.75rem;
    zoom: 1.1;

    @media (min-width: 0px) {
        font-size: 1.75rem;
    }
    @media (min-width: 320px) {
            font-size: calc(1.75rem + (28 - 20) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
            font-size: 1.25rem;
    }


    //${(props) => props.fontSize}px;
    //font-size: 28px;
    //line-height: 34px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h3)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
    
    &.hero {
        margin-left: 1.5rem;
        margin-top: 3rem;
    }
`;

export const H4 = styled.h4<TextProps>`
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    zoom: 1.1;

    @media (min-width: 0px) {
        font-size: 1.5rem;
    }
    @media (min-width: 320px) {
            font-size: calc(1.5rem + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
            font-size: 1rem;
    }
    
    //${(props) => props.fontSize}px;
    //font-size: 24px;
    //line-height: 29px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h4)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
`;

export const H5 = styled.h5<TextProps>`
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    zoom: 1.1;

    @media (min-width: 0px) {
        font-size: 1.5rem;
    }
    @media (min-width: 320px) {
            font-size: calc(1rem + (28 - 24) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
            font-size: 1.75rem;

    }
    //${(props) => props.fontSize}px;
    //font-size: 20px;
    //line-height: 24px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h5)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
`;

export const H6 = styled.h6<TextProps>`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    zoom: 1.1;

    @media (min-width: 0px) {
        font-size: 1rem;
    }
    @media (min-width: 320px) {
            font-size: calc(1rem + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
            font-size: 1.5rem;
    }

    //${(props) => props.fontSize}px;
    //font-size: 16px;
    //line-height: 20px;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_h6)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
`;

export const Subtitle = styled.p<TextProps>`
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 20px;
    text-transform: uppercase;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_caption)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};
`;

export const Text = styled.p<TextProps>`
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.fontSize}px;
    //font-size: 16px;
    line-height: 160%;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_text)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `1rem`};

    &.experience {
        padding-top: 1.5rem;
        text-align: center;
    }
`;

export const BtnText = styled.p<TextProps>`
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => props.fontSize}px;
    //font-size: 18px;
    //line-height: 160%;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_button)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
    margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : `0rem`};
`;

export const Subtitle2 = styled.p<TextProps>`
    font-style: normal;
    font-weight: 600;
    font-size: 0.75em;
    line-height: 15px;
    text-transform: uppercase;
    color: ${(props) => (props.color ? `${props.color}` : props.theme.color_caption)};
    text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : `left`)};
`;
