'use client'
import {
  DivApresentation,
  DivInsideLeft,
  DivInsideLeftApresentation,
  DivInsideLeftApresentation2,
  DivInsideLeftApresentation3,
  SmallDivInsideLeftApresentation,
  DivInsideRight,
  DivUpText,
  H2,
  TextApresentation,
  InclusionImageApresentation,
  InclusionImageApresentation3,
} from './apresentationStyles'
import * as F from '../../styles/Fonts'
import ImageInclusionApresentation from '../../assets/images/imageApresentationYellow.svg'
import ImageInclusionApresentation2 from '../../assets/images/imageApresentationred.svg'
import ImageInclusionApresentation3 from '../../assets/images/imageApresentationPurple.svg'
import Title from '../Title'
import { EditButton } from '../Button'
import Theme from '@/utils/useThemeProvider'
import { useFontStore } from '../header/header'

export function Apresentation() {
  const { fontSize, sizeIncrement } = useFontStore();

  let calculatedSize = fontSize * sizeIncrement;

  if (calculatedSize < -16) {
    calculatedSize = -16;
  }

  if (calculatedSize > 32) {
    calculatedSize = 32;
  }


  return (
    <DivApresentation aria-label='seção: o que é esta plataforma?'>
      {/* <EditButton handleOnClick={() => { }} label='Editar' /> */}
      <DivInsideLeft>
        <DivInsideLeftApresentation>
          <InclusionImageApresentation
            src={ImageInclusionApresentation.src}
            alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
          />
        </DivInsideLeftApresentation>
        <SmallDivInsideLeftApresentation></SmallDivInsideLeftApresentation>
        <DivInsideLeftApresentation2>
          <InclusionImageApresentation3
            src={ImageInclusionApresentation2.src}
            alt="Menino branco de cabelo curto, vestindo uma camisa listrada cinza e branca, segurando a imagem de um coração com cores representando o símbolo do Autismo
            "
          />
        </DivInsideLeftApresentation2>
        <DivInsideLeftApresentation3>
          <InclusionImageApresentation
            src={ImageInclusionApresentation3.src}
            alt="Mão embaixo de uma orelha fazendo gesto para tentar ouvir"
          />
        </DivInsideLeftApresentation3>
      </DivInsideLeft>
      <DivInsideRight>
        <Title title='O que é a plataforma?' color={Theme().color_background_green} />
        <F.Text fontSize={16 + calculatedSize}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pulvinar felis id hendrerit congue. Morbi sollicitudin pulvinar enim
          id condimentum. Proin semper, lorem ut commodo finibus, felis purus
          eleifend mauris, vel vestibulum enim erat eget purus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar felis id
          hendrerit congue. Morbi sollicitudin pulvinar enim id condimentum.
          Proin semper, lorem ut commodo finibus.
        </F.Text>
      </DivInsideRight>
    </DivApresentation>
  )
}
