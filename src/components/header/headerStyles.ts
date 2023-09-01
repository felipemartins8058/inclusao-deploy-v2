'use client'
import styled from 'styled-components'

interface Linkprops {
  fontSize: number;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  padding: 0 1rem;
  width: 100%;
  gap: 1rem;
  background: ${props => props.theme.color_background_light};

`

export const DivHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
`

export const Link = styled.a<Linkprops>`
  font-size: ${(props) => props.fontSize}px;
`

export const DivRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const DivInsideUp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 768px){
    justify-content: end;
  }
`

export const DivInsideUpLeft = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  background-color: white;

  @media (max-width: 768px){
    display: none;
  }
`
export const DivInsideUpRight = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;

  @media (max-width: 768px){
    gap:  1rem;
  }

  @media (max-width: 480px){
    gap:  0.5rem;
  }
`

export const DivInsideDown = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    display: none;
  }
`

export const DivInsideDownLeft = styled.div`
  display: flex;
`

export const DivInsideDownRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const SeparatorSmall = styled.div`
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  width: 100%;

  @media (max-width: 768px){
    display: none;
  }
`

export const BigSeparator = styled.div`
  width: 100%;
  margin-top: 1.75rem;
  background: #f7f9fa;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  height: 0.0625rem;

  @media (max-width: 768px){
    margin-top: 0;
  }
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
  margin-right: 1rem;

`

export const LogoImg = styled.img`
  width: 4rem;
  height: 5.25rem;

  @media (max-width: 768px){
    width: 2.125rem;
    height: 3.025rem;
  }
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
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  line-height: 2.5rem;

`
