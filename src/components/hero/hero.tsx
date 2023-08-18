'use client'
import {
    DivHero,
    DivInsideRight,
    DivInsideLeft,
    DivInsideLeftText,
    DivInsideLeftBar,
    SmallDivInsideRight,
    BigDivInsideRight,
    SmallDivInsideRight2,
    SmallDivInsideRight4,
    SmallDivInsideRight3,
    BigDivInsideRight2,
    InclusionImage,
    InclusionBigImage,
} from "./heroStyles";
import ImageInclusion from "../../assets/images/imagerow1.svg";
import ImageInclusion2 from "../../assets/images/imagerow2.svg";
import ImageInclusion3 from "../../assets/images/imagerow3.svg";
import ImageInclusion4 from "../../assets/images/imagerow4.svg";
import ImageInclusion5 from "../../assets/images/imagecolumn1.svg";
import ImageInclusion6 from "../../assets/images/imagecolumn2.svg";
import * as F from "../../styles/Fonts";
import { useFontStore } from "../header/header";


export function Hero() {
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -16) {
        calculatedSize = -16;
        alert("Você não pode colocar o texto menor que 12px;")
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
        alert("Você não pode colocar o texto maior que 72px;")
    }

    return (
        <DivHero aria-label="Banner">
            <DivInsideLeft>
                <DivInsideLeftBar></DivInsideLeftBar>
                <DivInsideLeftText>
                    <F.H1 className="hero" fontSize={40 + calculatedSize}>Construindo indicadores sobre inclusão</F.H1>
                    <F.H3 className="hero" fontSize={28 + calculatedSize}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet.
                    </F.H3>
                </DivInsideLeftText>
            </DivInsideLeft>
            <DivInsideRight aria-label='grade de imagens'>
                <SmallDivInsideRight>
                    <InclusionImage
                        src={ImageInclusion.src}
                        alt="Menina branca de longos cabelos castanhos, vestindo uma blusa rosa e uma calça jeans e utilizando uma capa amarela e uma mascara de super heroína"
                    />
                </SmallDivInsideRight>
                <SmallDivInsideRight2>
                    <InclusionImage
                        src={ImageInclusion2.src}
                        alt="Mulher branca de cabelos curtos, vestindo uma blusa branca e fazendo libras"
                    />
                </SmallDivInsideRight2>
                <SmallDivInsideRight3>
                    <InclusionImage
                        src={ImageInclusion3.src}
                        alt="Menino branco de cabelo curto, vestindo uma camisa azul, sorrindo com as maõs para cima, cheias de tinta"
                    />
                </SmallDivInsideRight3>
                <SmallDivInsideRight4>
                    <InclusionImage
                        src={ImageInclusion4.src}
                        alt="Homen preto de cabelo curto, vestindo uma camisa xadrez branca e vermelha, com a mão esquerda no ouvido"
                    />
                </SmallDivInsideRight4>
                <BigDivInsideRight>
                    <InclusionBigImage
                        src={ImageInclusion5.src}
                        alt="Mulher branca cadeirante, de cabelo preto amarrado, vestindo uma jaqueta jeans, uma camisa branca, uma calça jeans e um tênis branco, sentada na cadeira de rodas com as mãos nas laterais"
                    />
                </BigDivInsideRight>
                <BigDivInsideRight2>
                    <InclusionBigImage
                        src={ImageInclusion6.src}
                        alt="Mulher preta de cabelos longos pretos, vestindo um casado bege, uma camisa branca, uma calça preta, uma bota preta e um oculos preto, em pé segurando um celular na mão direita e uma bengala branca na mão esquerda"
                    />
                </BigDivInsideRight2>
            </DivInsideRight>
        </DivHero>
    );
}
