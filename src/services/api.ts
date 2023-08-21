import axios from "axios";

const api = axios.create({
    baseURL: "",
    headers: {
        //"Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // 'Content-Type' : 'application/json',
        // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    },
});
//TODO: Remove after api is ready
export const fakeCardsInfoHighlight = [
    {
        titulo: "O que é inclusão?",
        aria_label:"Cartão 1: o que é inclusão",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image6.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'cadeirante branco, vestindo uma blusa branca e uma calça marrom, subindo uma calçada não acessível, sem a rampa',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "Sobre a plataforma",
        aria_label:"Cartão 2: sobre a plataforma",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image7.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'pessoa cega andando com bengala branca',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "O que é diversidade?",
        aria_label:"Cartão 3: o que é diversidade?",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image8.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'menino branco, vestindo camisa listrada branca e verde, brincando com blocos de montar de diferentes cores',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
];

export const fakeCardsInfo = [
    {
        titulo: "O que é inclusão?",
        aria_label:"Cartão 1: o que é inclusão",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image6.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'cadeirante branco, vestindo uma blusa branca e uma calça marrom, subindo uma calçada não acessível, sem a rampa',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "Sobre a plataforma",
        aria_label:"Cartão 2: sobre a plataforma",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image7.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'pessoa cega andando com bengala branca',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "O que é diversidade?",
        aria_label:"Cartão 3: o que é diversidade?",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image8.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'menino branco, vestindo camisa listrada branca e verde, brincando com blocos de montar de diferentes cores',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "O que é inclusão?",
        aria_label:"Cartão 4: o que é inclusão",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image6.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'cadeirante branco, vestindo uma blusa branca e uma calça marrom, subindo uma calçada não acessível, sem a rampa',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "Sobre a plataforma",
        aria_label:"Cartão 5: sobre a plataforma",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image7.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'pessoa cega andando com bengala branca',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
    {
        titulo: "O que é diversidade?",
        aria_label:"Cartão 6: o que é diversidade?",
        resumo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        corpo_texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.",
        imagem: [
            {
                path: "https://dev-inclusao.netlify.app/assets/images/image8.png",
                alt: "imagem placeholder",
            },
        ],
        image_alt:'menino branco, vestindo camisa listrada branca e verde, brincando com blocos de montar de diferentes cores',
        botao: { tipo: "LINK | ...", texto: "" },
        secao: "",
        layout: "CARD | PARCEIROS | SELOS",
        pin: "true | false",
    },
];
