'use client'
import {
    DivHero,
    DivInsideRight,
    DivInsideLeft,
    DivInsideLeftText,
    DivInsideLeftBar,
    SmallDivInsideRight,
    BigDivInsideRight,
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

export function Hero() {
    
    return (
        <DivHero aria-label="Banner">
            <DivInsideLeft>
                <DivInsideLeftBar />
                <DivInsideLeftText>
                    <F.H1 className="hero" >Construindo indicadores sobre inclusão</F.H1>
                    <F.H3 className="hero" >
                        Indicadores Transformam a Realidade: Inclusão e Equidade em Ação.
                    </F.H3>
                </DivInsideLeftText>
            </DivInsideLeft>
            <DivInsideRight aria-label='grade de imagens'>
                <SmallDivInsideRight color={'#b9e6fe'}
                    gridRowStart={1}
                    gridColumnStart={1}
                    gridColumnEnd={1}>
                    <InclusionImage
                        src={ImageInclusion.src}
                        alt="Menina branca de longos cabelos castanhos, vestindo uma blusa rosa e uma calça jeans e utilizando uma capa amarela e uma mascara de super heroína"
                    />
                </SmallDivInsideRight>
                <SmallDivInsideRight color={'#feee95'}
                    gridRowStart={2}
                    gridRowEnd={2}
                    gridColumnStart={1}
                    gridColumnEnd={1}>
                    <InclusionImage
                        src={ImageInclusion2.src}
                        alt="Mulher branca de cabelos curtos, vestindo uma blusa branca e fazendo libras"
                    />
                </SmallDivInsideRight>
                <SmallDivInsideRight color={'#99f6e0'}
                    gridRowStart={1}
                    gridColumnStart={3}
                    gridColumnEnd={3}>
                    <InclusionImage
                        src={ImageInclusion3.src}
                        alt="Menino branco de cabelo curto, vestindo uma camisa azul, sorrindo com as maõs para cima, cheias de tinta"
                    />
                </SmallDivInsideRight>
                <SmallDivInsideRight color={'#fecdd6'}
                    gridRowStart={2}
                    gridColumnStart={3}
                    gridColumnEnd={3}>
                    <InclusionImage
                        src={ImageInclusion4.src}
                        alt="Homen preto de cabelo curto, vestindo uma camisa xadrez branca e vermelha, com a mão esquerda no ouvido"
                    />
                </SmallDivInsideRight>
                <BigDivInsideRight
                    color={'#d9d6fe'}
                    gridRowStart={1}
                    gridRowEnd={3}
                    gridColumnStart={2}
                    gridColumnEnd={2}
                >
                    <InclusionBigImage
                        src={ImageInclusion5.src}
                        alt="Mulher branca cadeirante, de cabelo preto amarrado, vestindo uma jaqueta jeans, uma camisa branca, uma calça jeans e um tênis branco, sentada na cadeira de rodas com as mãos nas laterais"
                    />
                </BigDivInsideRight>
                <BigDivInsideRight color={'#b9e6fe'}
                    gridRowStart={1}
                    gridRowEnd={3}
                    gridColumnStart={4}
                    gridColumnEnd={4}
                >
                    <InclusionBigImage
                        src={ImageInclusion6.src}
                        alt="Mulher preta de cabelos longos pretos, vestindo um casado bege, uma camisa branca, uma calça preta, uma bota preta e um oculos preto, em pé segurando um celular na mão direita e uma bengala branca na mão esquerda"
                    />
                </BigDivInsideRight>
            </DivInsideRight>
        </DivHero>
    );
}
