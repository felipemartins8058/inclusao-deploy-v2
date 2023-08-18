'use client'
import LogoImage from '../../assets/images/logopreto.svg'
import Amenos from '../../assets/images/A-.svg'
import Amais from '../../assets/images/A+.svg'
import Blackwhite from '../../assets/images/blackwhite.svg'
import Libras from '../../assets/images/libras.svg'
import FacebookIcon from '../../assets/images/facebook.svg'
import LinkendinIcon from '../../assets/images/linkedin.svg'
import {
  DivInsideUp,
  DivInsideUpLeft,
  DivInsideUpRight,
  DivInsideDown,
  DivRight,
  Header,
  Logo,
  LogoImg,
  SeparatorSmall,
  IconImg,
  DivInsideDownRight,
  DivInsideDownLeft,
  ButtonChangeFont,
  ButtonLogin,
  NavBar,
  NavLink,
  ButtonContrast
} from './headerStyles'
import * as F from '../../styles/Fonts'
import Link from 'next/link'
import { LinkButton } from '../Button'
import Theme from '@/utils/useThemeProvider'

import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa'
import {IoContrastOutline} from 'react-icons/io5'
import {MdOutlineTextIncrease, MdOutlineTextDecrease} from 'react-icons/md'
interface HeaderMenu {
  toggleTheme: any
}
import Home from '@/app/page'
import create from "zustand"

interface FontState {
  fontSize: number;
  sizeIncrement: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

export const useFontStore = create<FontState>((set) => ({
  fontSize: 0,
  sizeIncrement: 2,
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + state.sizeIncrement })),
  decreaseFontSize: () => set((state) => ({ fontSize: state.fontSize - state.sizeIncrement })),
}));

export function HeaderMenu({toggleTheme}: HeaderMenu) {
  const { increaseFontSize, decreaseFontSize } = useFontStore();

  const handleDecreaseClick = () => {
    decreaseFontSize();
  }

  const handleIncreaseClick = () => {
    increaseFontSize();
  };

  const { fontSize, sizeIncrement } = useFontStore();

  let calculatedSize = fontSize * sizeIncrement;

  if (calculatedSize < -16) {
    calculatedSize = -16;
  }

  if (calculatedSize > 32) {
    calculatedSize = 32;
  }

  return (
    <Header aria-label="Barra de navegação fixa (cabeçalho)">
      <Logo>
        <LogoImg src={LogoImage.src} alt="Logo da plataforma da inclusão: um cubo preto" />
      </Logo>
      <DivRight>
        <DivInsideUp>
          <DivInsideUpLeft aria-label='redes sociais'>
            <FaFacebookSquare size={22} color={Theme().color_icon_dark} aria-label="Ícone para rede social: facebook"/>
            <FaLinkedin size={22} color={Theme().color_icon_dark} aria-label="Ícone para rede social: linkedin"/>
          </DivInsideUpLeft>
          <DivInsideUpRight aria-label='opções de acessibilidade'>
            <ButtonChangeFont onClick={handleDecreaseClick}><MdOutlineTextIncrease size={22} color={Theme().color_icon_dark} aria-label='Aumentar fonte do texto'/></ButtonChangeFont>
            <ButtonChangeFont onClick={handleIncreaseClick}><MdOutlineTextDecrease size={22} color={Theme().color_icon_dark} aria-label='Diminuir fonte do texto'/></ButtonChangeFont>
            <ButtonContrast aria-label='Mudar para alto contraste' onClick={() => {toggleTheme()}}>
              <IoContrastOutline size={22} color={Theme().color_icon_dark} />
            </ButtonContrast>
          </DivInsideUpRight>
        </DivInsideUp>
        <SeparatorSmall />
        <DivInsideDown>
          <DivInsideDownLeft>
            <NavBar aria-label='Menu de navegação'>
              <Link href={'/'}>Inicio</Link>
              <Link href={'/informativos'}>Informativo</Link>
              <Link href={'/'}>Sobre a plataforma</Link>
            </NavBar>
          </DivInsideDownLeft>
          <DivInsideDownRight>
            <LinkButton variant='noIcon' outline={true} color={Theme().color_text} label='Login' link='/login'/>
          </DivInsideDownRight>
        </DivInsideDown>
      </DivRight>
    </Header>
  )
}
