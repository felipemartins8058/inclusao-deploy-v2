import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
});
//TODO: Remove after api is ready
export const fakeCardsInfoHighlight = [
    {
        titulo: "O que é inclusão?",
        aria_label:"Cartão 1: o que é inclusão",
        resumo_texto: "Inclusão é o alicerce de uma sociedade colaborativa, equitativa e sustentável, exigindo uma abordagem interdisciplinar e políticas públicas para garantir sua efetividade, e também com as diretrizes previstas em legislações brasileiras específicas ao exercício democrático. ",
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
        resumo_texto: "Uma poderosa ferramenta de análise de indicadores é essencial para mudanças efetivas na educação, fortalecendo a inclusão e a equidade, garantindo que ninguém fique para trás, em consonância com a Agenda 2030 da ONU.",
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
        resumo_texto: "Diversidade é a presença de características individuais variadas, essenciais para estimular a criatividade e a inovação, elementos-chave na promoção de ambientes mais inclusivos. Acreditamos que a diversidade é um pilar fundamental para a transformação do Brasil.",
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
