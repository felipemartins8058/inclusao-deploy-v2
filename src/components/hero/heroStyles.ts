'use client'
import styled from 'styled-components'

interface SmallDivInsideRightProps {
  color: string;
  gridRowStart?: number;
  gridRowEnd?: number;
  gridColumnStart?: number;
  gridColumnEnd?: number;
}
interface BigDivInsideRightProps {
  color: string;
  gridRowStart?: number;
  gridRowEnd?: number;
  gridColumnStart?: number;
  gridColumnEnd?: number;
}

export const DivHero = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding: 5rem 1rem;
  gap: 2rem;

  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

`

export const DivInsideLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
export const DivInsideLeftBar = styled.div`
  min-width: 0.5rem;
  height: 18.5rem;
  background: linear-gradient(
    to bottom,
    #b9e6fe 20%,
    #feee95 20% 40%,
    #fecdd6 40% 60%,
    #d9d6fe 60% 80%,
    #99f6e0 80%
  );
`

export const DivInsideLeftText = styled.div`
  //margin: 0 1rem;
`

export const DivInsideRight = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-row: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media (max-width: 1200px) and (min-width: 1024px){
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media (max-width: 320px) {
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`

export const SmallDivInsideRight = styled.div<SmallDivInsideRightProps>`
  background-color: ${props => props.color};
  grid-row-start: ${props => props.gridRowStart};
  grid-row-end: ${props => props.gridRowEnd};
  grid-column-start: ${props => props.gridColumnStart};
  grid-column-end: ${props => props.gridColumnEnd};
  display: flex;
  align-items: flex-end;

  
`

export const BigDivInsideRight = styled.div<BigDivInsideRightProps>`
  background-color: ${props => props.color};
  grid-row-start: ${props => props.gridRowStart};
  grid-row-end: ${props => props.gridRowEnd};
  grid-column-start: ${props => props.gridColumnStart};
  grid-column-end: ${props => props.gridColumnEnd};
  display: flex;
  align-items: end;

`

export const InclusionImage = styled.img`
  width: 12.5rem;
  height: 13.75rem;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 13rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 4.5rem;
    height: 5rem;
  }

  @media (max-width: 320px){
    width: 3.5rem;
    height: 4rem;
  }
`

export const InclusionBigImage = styled.img`
  width: 12.5rem;
  height: 27.5rem;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 23rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 20rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 6rem;
    height: 13rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 4.5rem;
    height: 10rem;
  }

  @media (max-width: 320px){
    width: 3.5rem;
    height: 7rem;
  }
`
