'use client'
import styled from 'styled-components'

interface TextProps {
  fontSize?: number;
}

export const DivFooterColor = styled.div`
  background-color: #212529;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

export const ContentFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 1.5rem;
`

export const DivImg = styled.div`
  margin-top: 3.75rem;
`

export const LogoImg = styled.img`
  width: 60xp;
  height: 84px;
`

export const DivInsideUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    align-items: start;
    flex-direction: column;
  }
`

export const DivInsideUpLeft = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const SectionFooter = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SectionFooterRight = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const DivSectionFooterRight = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize}px;
  //font-size: 1rem;
  color: #ffffff;
`

export const DivInsideUpRight = styled.div`
  margin-top: 1.5rem;
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1.5rem;

  @media (max-width: 1200px){
    margin-left: 0;
  }

  @media (max-width: 768px) and (min-width: 480px){
    justify-content: flex-start;
  }

  @media (max-width: 480px){
    justify-content: flex-start;
  }
`

export const DivInsideDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px){
    flex-direction: column;
  }
`

export const DivInsideDownLeft = styled.div`
  display: flex;
`

export const DivInsideDownRight = styled.div`
  margin-top: 1rem;
  gap: 1.5rem;
  display: flex;
  justify-content: flex-end;
`

export const SeparatorSmall = styled.div`
  margin: 1rem 0;
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;
`
export const IconImg = styled.img``
