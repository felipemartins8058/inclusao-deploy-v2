'use client'
import LogoImage from '../../assets/images/logobranco.svg'
import FacebookIcon from '../../assets/images/facebookwhite.svg'
import LogoSide from '../../assets/images/logoside.svg'
import { dataFooter } from './components/constants/dataFooter'
import * as F from './footerStyles'
import { H6 } from '@/styles/Fonts';
import React from 'react'

export function Footer() {

  // const LogoData = React.useCallback(() => {

  //   return dataFooter.map(field => {
  //     return (
  //       <F.IconImg src={field.img} alt={field.alt} />
  //     )
  //   })
  // })

  return (
    <F.DivFooterColor aria-label="rodapé">
      <F.ContentFooter aria-label='conteúdo do rodapé'>
        <F.DivImg>
          <F.LogoImg src={LogoImage.src} alt="Logo da plataforma da inclusão: um cubo preto" />
        </F.DivImg>

        <F.DivInsideUp>
          <F.DivInsideUpLeft aria-label='contato'>
            <F.SectionFooter aria-label='email'>
              <H6 color={'white'}>EMAIL</H6>
              <F.Text >EmailInclusao@email.com</F.Text>
            </F.SectionFooter>
            <F.SectionFooter aria-label='telefone'>
              <H6 color={'white'}>TELEFONE</H6>
              <F.Text >+55 85 99999-9999</F.Text>
            </F.SectionFooter>
            <F.SectionFooter aria-label='endereço'>
              <H6 color={'white'}>ENDEREÇO</H6>
              <F.Text >Lorem ipsum dolor sit amet, consectetur adipiscing.</F.Text>
            </F.SectionFooter>
          </F.DivInsideUpLeft>
          <F.DivInsideUpRight aria-label='logotipos dos realizadores da plataforma'>
            <F.SectionFooterRight aria-label='Lorem ipsum'>
              <H6 color={'white'}>Lorem ipsum</H6>
              <F.DivSectionFooterRight>
                {/* {LogoData()} */}
              </F.DivSectionFooterRight>
            </F.SectionFooterRight>
          </F.DivInsideUpRight>
        </F.DivInsideUp>
        <F.SeparatorSmall />
        <F.DivInsideDown>
          <F.DivInsideDownLeft>
            <H6 color={'white'}>2023, TODOS OS DIREITOS RESERVADOS</H6>
          </F.DivInsideDownLeft>
          <F.DivInsideDownRight aria-label='redes sociais'>
            <F.IconImg src={FacebookIcon.src} alt="Link facebook" />
            <F.IconImg src={FacebookIcon.src} alt="Link facebook" />
          </F.DivInsideDownRight>
        </F.DivInsideDown>
      </F.ContentFooter>
    </F.DivFooterColor>
  )
}
