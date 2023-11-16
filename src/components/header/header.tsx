'use client'
import { useContext, useState } from 'react'
import LogoImage from '../../assets/images/logopreto.svg'
import LogoImageBranco from '../../assets/images/logobranco.svg'
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
  Link,
  ButtonContrast,
  BigSeparator,
  DivHeader,
} from './headerStyles'
import * as F from '../../styles/Fonts'
import { LinkButton } from '../Button'
import Theme from '@/utils/useThemeProvider'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { IoContrastOutline } from 'react-icons/io5'
import { RiFontSize } from 'react-icons/ri'
import { MdOutlineTextIncrease, MdOutlineTextDecrease } from 'react-icons/md'
import { create } from "zustand"
import { ThemeContext } from '@/app/App'
import MenuMobile from '../menuMobile/menuMobile'
interface HeaderMenu {
  toggleTheme: any
}

interface FontState {
  fontSize: number;
  sizeIncrement: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

export const useFontStore = create<FontState>((set) => ({
  fontSize: 0,
  sizeIncrement: 2,
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + state.sizeIncrement })),
  decreaseFontSize: () => set((state) => ({ fontSize: state.fontSize - state.sizeIncrement })),
  resetFontSize: () => set((state) => ({ fontSize: 0 })),
}));

export function HeaderMenu({ toggleTheme }: HeaderMenu) {
  
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontStore();

  const handleDecreaseClick = () => {
    decreaseFontSize();
  }

  const handleIncreaseClick = () => {
    increaseFontSize();
  };

  const handleResetClick = () => {
    resetFontSize();
  };

  {/*}
  const { fontSize, sizeIncrement } = useFontStore();

  let calculatedSize = fontSize * sizeIncrement;

  if (calculatedSize < -6) {
    calculatedSize = -6;
  }

  if (calculatedSize > 22) {
    calculatedSize = 22;
  }*/}

  const selectedTheme = useContext(ThemeContext)

  return (
    <>
      <Header aria-label="Barra de navegação fixa (cabeçalho)">
        <DivHeader>
        <Logo>
          {selectedTheme == 'defaultTheme' ? (<LogoImg src={LogoImage.src} alt="Logo da plataforma da inclusão: um cubo preto" />) : (<LogoImg src={LogoImageBranco.src} alt="Logo da plataforma da inclusão: um cubo preto" />)}
        </Logo>
        <DivRight>
          <DivInsideUp>
            <DivInsideUpLeft aria-label='redes sociais'>
              <FaFacebookSquare size={22} color={Theme().color_icon_dark} aria-label="Ícone para rede social: facebook" />
              <FaLinkedin size={22} color={Theme().color_icon_dark} aria-label="Ícone para rede social: linkedin" />
            </DivInsideUpLeft>
            <DivInsideUpRight aria-label='opções de acessibilidade'>
              <ButtonChangeFont onClick={handleResetClick}><RiFontSize size={20} color={Theme().color_icon_dark} aria-label='Resetar o tamanho da fonte do texto' /></ButtonChangeFont>
              <ButtonChangeFont onClick={handleIncreaseClick}><MdOutlineTextIncrease size={22} color={Theme().color_icon_dark} aria-label='Aumentar fonte do texto' /></ButtonChangeFont>
              <ButtonChangeFont onClick={handleDecreaseClick}><MdOutlineTextDecrease size={22} color={Theme().color_icon_dark} aria-label='Diminuir fonte do texto' /></ButtonChangeFont>
              <ButtonContrast aria-label='Mudar para alto contraste' onClick={() => { toggleTheme() }}>
                <IoContrastOutline size={22} color={Theme().color_icon_dark} />
              </ButtonContrast>
              <MenuMobile />
            </DivInsideUpRight>
          </DivInsideUp>
          <SeparatorSmall />
          <DivInsideDown>
            <DivInsideDownLeft>
              <NavBar aria-label='Menu de navegação'>
                <Link href={'/'}>Início</Link>
                <Link href={'/informativos'}>Informativo</Link>
                <Link href={'/'}>Sobre a plataforma</Link>
              </NavBar>
            </DivInsideDownLeft>
            <DivInsideDownRight>
              <LinkButton variant='noIcon' outline={true} color={Theme().color_text} label='Login' link='/login' />
            </DivInsideDownRight>

          </DivInsideDown>
        </DivRight>
        </DivHeader>
      </Header>
      <BigSeparator />
    </>
  )
}
