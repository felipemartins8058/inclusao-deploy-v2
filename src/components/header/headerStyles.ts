'use client'
import styled from 'styled-components'

export const Header = styled.header`
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0 10rem;
  gap: 1rem;
  height: 9.5rem;
  flex-direction: row;
  background: ${props => props.theme.color_background_light};
  z-index: 999;
`

export const DivRight = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const DivInsideUp = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const DivInsideUpLeft = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  display: flex;
  gap: 24px;
`
export const DivInsideUpRight = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  display: flex;
  gap: 24px;
  justify-content: flex-end;
`

export const DivInsideDown = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  
`

export const DivInsideDownLeft = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
`

export const DivInsideDownRight = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SeparatorSmall = styled.div`
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  width: 100%;
`

export const Separator = styled.div`
  background: #f7f9fa;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  height: 0.0625rem;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 132px;
`

export const LogoImg = styled.img`
  width: 60xp;
  height: 84px;
`
export const IconImg = styled.img``

export const ButtonContrast = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  a{
    color: ${(props) => props.theme.color_link};
    text-decoration: none;
  }

`
export const NavLink = styled.p`
  font-size: 1.125rem;
  margin-right: 1.5rem;
  text-decoration: none;
  
  &:last-child {
    margin-right: 0;
    min-width: 11rem;
  }
  
  a{
    color: ${(props) => props.theme.color_link};
    text-decoration: none;
  }
`

export const ButtonChangeFont = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;  
  background-color: transparent;
  border:none;

  &:hover{
    cursor: pointer;
  }
`

export const ButtonLogin = styled.a`
  width: 5.125rem;
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  line-height: 2.5rem;
`
