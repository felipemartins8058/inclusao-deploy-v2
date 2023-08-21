import LogoImage from '../../assets/images/logobranco.svg'
import FacebookIcon from '../../assets/images/facebookwhite.svg'
import LogoSide from '../../assets/images/logoside.svg'
import {
  ContentFooter,
  DivImg,
  DivInsideDown,
  DivInsideUp,
  DivInsideUpLeft,
  DivInsideUpRight,
  H6,
  Text,
  LogoImg,
  IconImg,
  SectionFooter,
  SeparatorSmall,
  DivInsideDownLeft,
  DivInsideDownRight,
  SectionFooterRight,
  DivSectionFooterRight,
  DivFooterColor
} from './footerStyles'

export function Footer() {
  return (
    <DivFooterColor aria-label="rodapé">
      <ContentFooter aria-label='conteúdo do rodapé'>
        <DivImg>
          <LogoImg src={LogoImage.src} alt="Logo da plataforma da inclusão: um cubo preto" />
        </DivImg>

        <DivInsideUp>
          <DivInsideUpLeft aria-label='contato'>
            <SectionFooter aria-label='email'>
              <H6>EMAIL</H6>
              <Text>EmailInclusao@email.com</Text>
            </SectionFooter>
            <SectionFooter aria-label='telefone'>
              <H6>TELEFONE</H6>
              <Text>+55 85 99999-9999</Text>
            </SectionFooter>
            <SectionFooter aria-label='endereço'>
              <H6>ENDEREÇO</H6>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
            </SectionFooter>
          </DivInsideUpLeft>
          <DivInsideUpRight aria-label='logotipos dos realizadores da plataforma'>
            <SectionFooterRight aria-label='Lorem ipsum'>
              <H6>Lorem ipsum</H6>
              <DivSectionFooterRight>
                <IconImg src={LogoSide.src} alt="Logo image" />
                <IconImg src={LogoSide.src} alt="Logo image" />
                <IconImg src={LogoSide.src} alt="Logo image" />
                <IconImg src={LogoSide.src} alt="Logo image" />
              </DivSectionFooterRight>
            </SectionFooterRight>
          </DivInsideUpRight>
        </DivInsideUp>
        <SeparatorSmall />
        <DivInsideDown>
          <DivInsideDownLeft>
            <H6>2023, TODOS OS DIREITOS RESERVADOS</H6>
          </DivInsideDownLeft>
          <DivInsideDownRight aria-label='redes sociais'>
            <IconImg src={FacebookIcon.src} alt="Link facebook" />
            <IconImg src={FacebookIcon.src} alt="Link facebook" />
          </DivInsideDownRight>
        </DivInsideDown>
      </ContentFooter>
    </DivFooterColor>
  )
}
