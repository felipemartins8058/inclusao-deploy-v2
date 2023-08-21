import { DivSquares, ColorBlock } from "./gridSquareStyles";
import * as F from "../../styles/Fonts";
import Image from "next/image";
import Theme from "@/utils/useThemeProvider";
import ImageMulherCadeirante from "../../assets/images/imagecolumn1.svg";
import ImageCriançaFantasiada from "../../assets/images/imagerow1.svg";
import ImageCriançaMãosPintadas from "../../assets/images/imagerow3.svg";
import { useFontStore } from '../header/header'

export function GridSquare() {
  const { fontSize, sizeIncrement } = useFontStore();

  let calculatedSize = fontSize * sizeIncrement;

  if (calculatedSize < -20) {
    calculatedSize = -20;
  }

  if (calculatedSize > 20) {
    calculatedSize = 20;
  }

  return (
    <DivSquares aria-label="grade de imagens">
      <ColorBlock gridArea="a" color={Theme().color_background_pink} />
      <ColorBlock gridArea="c" color={Theme().color_background_purple}>
        <F.H2 fontSize={32 + calculatedSize}>
          Inclusão é respeito, igualdade e oportunidade para todos.
        </F.H2 >
      </ColorBlock>
      <ColorBlock gridArea="d" color={Theme().color_background_blue}>
        <Image
          src={ImageCriançaMãosPintadas}
          alt="Criança sorrindo com as mãos pintadas"
        />
      </ColorBlock>
      <ColorBlock gridArea="e" color={Theme().color_background_purple}>
        <Image
          src={ImageCriançaFantasiada}
          alt="Criança fantasiade de Herói"
        />
      </ColorBlock>
      <ColorBlock
        gridArea="f"
        color={Theme().color_background_green}
      ></ColorBlock>
      <ColorBlock gridArea="b" color={Theme().color_background_green}>
        <F.H2 fontSize={32 + calculatedSize}>Abraçando a diversidade e promovendo a inclusão.</F.H2>
      </ColorBlock>
      <ColorBlock gridArea="j" color={Theme().color_background_yellow}>
        <Image
          src={ImageMulherCadeirante}
          alt="Mulher em uma cadeira de rodas sorrindo"
        />
      </ColorBlock>
    </DivSquares>
  );
}