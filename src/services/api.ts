import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
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
                path: "http://localhost:8080/assets/images/image6.png",
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
                path: "http://localhost:8080/assets/images/image7.png",
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
                path: "http://localhost:8080/assets/images/image8.png",
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
                path: "http://localhost:8080/assets/images/image6.png",
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
                path: "http://localhost:8080/assets/images/image7.png",
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
                path: "http://localhost:8080/assets/images/image8.png",
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
                path: "http://localhost:8080/assets/images/image6.png",
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
                path: "http://localhost:8080/assets/images/image7.png",
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
                path: "http://localhost:8080/assets/images/image8.png",
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
