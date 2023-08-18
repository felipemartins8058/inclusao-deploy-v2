"use client";
import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    border-radius: 4px;
    background: ${(props) => props.theme.color_background_light};
    border: 1px solid ${(props) => props.theme.color_default_border};
    
    /* Shadow */
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
`;

export const CardImage = styled.div`
    position: relative;
    overflow: hidden;
`;

export const CardImageBackground = styled.div`
    background-color: ${(props) => (props.color ? props.color : props.theme.color_background_blue)};
    opacity: 0.15;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
`;

export const CardImageGrid = styled.div`
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
`;

export const CardImageBox = styled.div`
    position: relative;
    z-index: 2;
    padding: 1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.div`
    padding: 1.5rem;
`;
