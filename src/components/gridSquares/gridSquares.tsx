import {
  DivSquares,
  SmallDivInsideRight,
  SmallDivInsideRight2,
  SmallDivInsideRight3,
  SmallDivInsideRight4,
  SmallDivInsideRight5,
  BigDivInsideRight,
  BigDivInsideRight2,
  H4,
  InclusionImageLogin,
} from './gridSquareStyles'
import ImageMulherCadeirante from '../../assets/images/imagecolumn1.svg'
import ImageCriançaFantasiada from '../../assets/images/imagerow1.svg'
import ImageCriançaMãosPintadas from '../../assets/images/imagerow3.svg'

export function GridSquare() {
  return (
    <DivSquares aria-label="grade de imagens">
      <SmallDivInsideRight></SmallDivInsideRight>
      <SmallDivInsideRight2>
        <H4>Inclusão é respeito, igualdade e oportunidade para todos.</H4>
      </SmallDivInsideRight2>
      <SmallDivInsideRight3>
        <InclusionImageLogin
          src={ImageCriançaMãosPintadas.src}
          alt="Criança sorrindo com as mãos pintadas"
        />
      </SmallDivInsideRight3>
      <SmallDivInsideRight4>
        <InclusionImageLogin
          src={ImageCriançaFantasiada.src}
          alt="Criança fantasiade de Herói"
        />
      </SmallDivInsideRight4>
      <SmallDivInsideRight5></SmallDivInsideRight5>
      <BigDivInsideRight>
        <H4>Abraçando a diversidade e promovendo a inclusão.</H4>
      </BigDivInsideRight>
      <BigDivInsideRight2>
        <InclusionImageLogin
          src={ImageMulherCadeirante.src}
          alt="Mulher em uma cadeira de rodas sorrindo"
        />
      </BigDivInsideRight2>
    </DivSquares>
  )
}
