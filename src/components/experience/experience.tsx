'use client'
import {
  DivExp,
  DivInsideExperience,
  DivInsideExperienceUsers,
  DivUpTextExp,
  H2Exp,
  UserImg,
  UserSection,
} from './experienceStyles'
import LogoSideBlack from '../../assets/images/logosidebarblack.svg'
import Title from '../Title'
import { EditButton } from '../Button'
import Theme from '@/utils/useThemeProvider'
import * as F from '../../styles/Fonts'
import { useFontStore } from '../header/header'

export function Experience() {
  const { fontSize, sizeIncrement } = useFontStore();

  let calculatedSize = fontSize * sizeIncrement;

  if (calculatedSize < -16) {
    calculatedSize = -16;
  }

  if (calculatedSize > 32) {
    calculatedSize = 32;
  }

  return (
    <DivExp aria-label='seção: quem já aplicou o selo da inclusão'>
      <DivInsideExperience>
        {/* <EditButton handleOnClick={() => {}} label='Editar' /> */}
        <Title title='Quem já aplicou?' color={Theme().color_background_purple} />
        <F.Text className="experience" fontSize={16 + calculatedSize}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum.
        </F.Text>
        <DivInsideExperienceUsers aria-label='grade de logotipos'>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
          <UserSection aria-label='logo fulaninho'>
            <UserImg src={LogoSideBlack.src} alt="Logo Fulaninho" />
            <F.H6>QUEM APLICOU</F.H6>
          </UserSection>
        </DivInsideExperienceUsers>
      </DivInsideExperience>
    </DivExp>
  )
}
