'use client'
import * as A from "./aprenderBrincandoStyles"
import Title from "@/components/Title"
import { useFontStore } from "@/components/header/header";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import Theme from "@/utils/useThemeProvider";
import ImgAutor from "../../../../assets/ImgAutor.png"
import * as F from "../../../../styles/Fonts";
import ImgAprender from "../../../../assets/images/imagemAprender.png"

export default function AprenderBrincando(){

    return (
        <A.AprenderBrincandoMain>
            <A.LocalNavigation aria-label='seção: projetos aprendendo brincando'>Aprender Brincando</A.LocalNavigation>
            <A.AprenderBrincandoGrid>
                    <A.TitleDiv>
                        <Title 
                            title="Aprender brincando: exploração e estímulos"
                            color={Theme().color_background_blue}
                            darkBackground={true}
                        />
                    </A.TitleDiv>           
                    <A.TextGrid1>
                        <A.DoisItensSection>
                            <div>
                                <F.Text color={Theme().color_text_light}>Estrelas</F.Text>
                            </div>
                            <div>
                                <F.Text color={Theme().color_text_light}>comentários</F.Text>
                            </div>                    
                        </A.DoisItensSection>
                        <F.Text color={Theme().color_text_light}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing    elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit     amet,
                        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem     ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,    consectetur 
                        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </F.Text>
                    </A.TextGrid1>
                    <A.TextGrid2>
                        <F.H3 color={Theme().color_text_light}>EXEMPLO DE USO</F.H3>
                        <F.Text color={Theme().color_text_light}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing    elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Lorem ipsum dolor sit     amet,
                        consectetur adipiscing elit.
                        </F.Text>
                        <A.DoisItensSection>
                            <F.Text color={Theme().color_text_light}>
                                Relacionados as ODS abaixo:
                            </F.Text>
                            <F.Text color={Theme().color_text_light}>
                                Publicado em 09/08/2023
                            </F.Text>
                        </A.DoisItensSection>
                    </A.TextGrid2>
                <A.AprenderBricandoImgInfo>
                    <A.AprenderImage src={ImgAprender.src} alt="criança com sindrome de down branca de cabelos castanhos claro vestida com uma blusa de mangas longa de cor azul clara e calça de cor bege calçando um sapato de cor branca sentada em um balanço brincado com outra criança branca de cabelos loiros de blusa com manga longa de cor laranja e calça de cor preta calçando um sapato de cor preta com branco em um parque infantil com árvores ao fundo" />
                    <A.AutorAprenderDiv>
                        <A.AuthorImageDiv>
                            <A.AuthorImage src={ImgAutor.src}/>
                        </A.AuthorImageDiv>
                        <A.AuthorInfoDiv aria-label='Informações sobre o autor da prática'>
                            <F.H6>Antônio de Melo</F.H6>
                            <F.Subtitle2>AUTOR DA PRÁTICA</F.Subtitle2>
                            <F.Subtitle2>antoniomelo@email.com</F.Subtitle2>
                        </A.AuthorInfoDiv>
                    </A.AutorAprenderDiv>
                </A.AprenderBricandoImgInfo>
            </A.AprenderBrincandoGrid>
        </A.AprenderBrincandoMain>
    )
}