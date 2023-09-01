'use client'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import Theme from '@/utils/useThemeProvider'
import { DivMobile, NavBar, LinksMenuMobile, ItemsMenuMobile, ButtonToggle, ItemsMenuLink, SobreposicaoDiv } from './menuMobileStyles'
const MenuMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(prevstate => !prevstate)
    }

    return (
        <div>
            <NavBar>
                <DivMobile className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <LinksMenuMobile>
                        <ItemsMenuMobile><ItemsMenuLink href="/">Início</ItemsMenuLink></ItemsMenuMobile>
                        <ItemsMenuMobile><ItemsMenuLink href="/informativos">Informativo</ItemsMenuLink></ItemsMenuMobile>
                        <ItemsMenuMobile><ItemsMenuLink href="/">Sobre a plataforma</ItemsMenuLink></ItemsMenuMobile>
                        <ItemsMenuMobile><ItemsMenuLink href="/login">Login</ItemsMenuLink></ItemsMenuMobile>
                        <FaFacebookSquare size={22} color={Theme().color_icon_dark} aria-label="Ícone para rede social: facebook" />
                        <FaLinkedin size={22} color={Theme().color_icon_dark} aria-label="Ícone para rede social: linkedin" />
                    </LinksMenuMobile>
                </DivMobile>
                <ButtonToggle className={`menu ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle} aria-label="botão menu mobile" >
                    {isMenuOpen ? <AiOutlineClose size={27} color={Theme().color_icon_dark} aria-label="Ícone Hambúrguer para fechar o menu monile" role='button' /> : <GiHamburgerMenu size={27} color={Theme().color_icon_dark} aria-label=" Ícone Hambúrguer para acessar o menu monile" role='button' />}
                </ButtonToggle>
            </NavBar>
            <SobreposicaoDiv className={`menu ${isMenuOpen ? 'open' : ''}`} />
        </div>
    )
}

export default MenuMobile
