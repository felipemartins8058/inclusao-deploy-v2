'use client'
import { useFontStore } from "@/components/header/header";
import { useContext, useState } from "react";
import {ThemeContext} from '../../../app/App'
import Theme from "@/utils/useThemeProvider";
import Title from "@/components/Title";
import { H2, H4, Text } from "../../../styles/Fonts";
import * as S from "./comunicacao"
import VideoPlay from "../../../assets/Videoplayer.svg"
import TextInput from "@/components/Inputs/TextInput";
import Card from "@/components/Card";
import { MdSearch } from 'react-icons/md'
import { ActionButton } from "@/components/Button";


export default function Comunicaçao() {
    const selectedTheme = useContext(ThemeContext)

    const [ cardComunicacaoPratica, setCardComunicacaoPratica ] = useState([
        { 
            id: 1, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo', 
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/images/message.png",
                    alt: "icone msg",
                },
            ],
            estrela: 4,
            mensagens: 12,
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'/boasPraticas/comunicacao/aprenderBrincando',
            aria_label:'label' 
        },
        { 
            id: 2, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo',
            iconeMessage:[
                {
                    path: "http://localhost:8080/assets/message.png",
                    alt: "icone msg",
                },
            ],
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
        { 
            id: 3, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo',
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/message.png",
                    alt: "icone msg",
                },
            ], 
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
        { 
            id: 4, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo',
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/message.png",
                    alt: "icone msg",
                },
            ], 
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
        { 
            id: 5, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo',
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/images/message.png",
                    alt: "icone msg",
                },
            ], 
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
        { 
            id: 6, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo',
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/message.png",
                    alt: "icone msg",
                },
            ], 
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
        { 
            id: 7, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ], 
            image_alt: 'alternativo',
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/message.png",
                    alt: "icone msg",
                },
            ],
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
        { 
            id: 8, imagem:[
            {
                path: "http://localhost:8080/assets/images/image7.png",
                alt: "imagem placeholder",
            },
            ],
            image_alt: 'alternativo',
            iconeMessage: [
                {
                    path: "http://localhost:8080/assets/images/message.png",
                    alt: "icone msg",
                },
            ], 
            estrela: '4',
            mensagens: '12',
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            autor:'Autor da Prática',
            link:'Ver prática',
            aria_label:'label' 
        },
    ]);

    return (
        <main>
            <S.ContentComunicacaoDiv>
                <S.SectionWrapper aria-label='Seção sobre comunicação'>
                <Title title="Comunicação" color={Theme().color_background_blue}/>
                <S.TextVideoSection>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <img src={VideoPlay.src} alt="Video Play" />
                </S.TextVideoSection>
                </S.SectionWrapper>
                <S.SectionWrapper>
                <H2>Práticas da área ({cardComunicacaoPratica.length})</H2>
                <S.PesquisaSection aria-label='Seção de pesquisa de cards'>
                    <TextInput 
                        aria-label='Input de pesquisa de cards por título'
                        label="Pesquisa por título"
                        placeholder=""
                    />
                    <TextInput 
                        aria-label='Input de pesquisa de cards por autor'
                        label="Pesquisa por autor"
                        placeholder=""
                    />
                    <ActionButton 
                        aria-label='Botão de pesquisa de cards' 
                        label="Pesquisar" 
                        handleOnClick={() => {}} 
                    />
                </S.PesquisaSection>
                <S.PraticaDivCards aria-label='Seção de Cards sobre as Práticas'>
                    {cardComunicacaoPratica.map(cardComunicacaoPratica => {
                        return <Card
                                    key={cardComunicacaoPratica.id}
                                    link={cardComunicacaoPratica.link}
                                    ariaLabel={cardComunicacaoPratica.aria_label}
                                    imageAlt={cardComunicacaoPratica.image_alt}
                                    title={cardComunicacaoPratica.conteudo}
                                    text={cardComunicacaoPratica.autor}
                                    color={selectedTheme == 'defaultTheme' ? Theme().color_background_blue : Theme().color_button}
                                    image={cardComunicacaoPratica.imagem[0].path}
                                    iconeMessage={cardComunicacaoPratica.iconeMessage[0].path}
                                    iconeAlt={cardComunicacaoPratica.iconeMessage[0].alt}
                                    
                                    
                                />
                    })}
                </S.PraticaDivCards>
                </S.SectionWrapper>
            </S.ContentComunicacaoDiv>
        </main>
    )
}