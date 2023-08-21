'use client'
import styled from 'styled-components'

export const DivApresentation = styled.section`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: 0 auto;
  padding: 5rem 1rem;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 4rem;

  @media (max-width: 1024px)
  {
    flex-direction: column-reverse;
    grid-template-columns: 1fr;
  }
`

export const DivInsideLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

`
export const DivInsideLeftApresentation = styled.div`
  background-color: #feee95;
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  display: flex;
  align-items: flex-end;
`

export const ColorBlock = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

  img{
    height: 100%;
    object-fit: cover;
  }
`
export const DivInsideLeftDivider = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 1rem;

`

export const SmallDivInsideLeftApresentation = styled.div`
  background-color: #99f6e0;
  width: 13.75rem;
  height: 2.375rem;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  display: flex;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.75rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 7rem;
  }

  @media (max-width: 320px){
    width: 6rem;
  }
`

export const DivInsideRight = styled.div`
  
`
export const DivUpText = styled.div`
  width: 500px;
  height: 80px;
  background: linear-gradient(to right, #99f6e0 16%, white 16% 100%);
  padding: 1.25rem 2.5rem;
`

export const H2 = styled.h2`
  font-size: 2rem;
`

export const TextApresentation = styled.p`
  font-size: 1rem;
  padding-top: 1.5rem;
  padding-right: 6rem;
  text-align: justify;
`

export const InclusionImageApresentation = styled.img`
width: 13.75rem;
height: 19.8125rem;

@media (max-width: 1200px) and (min-width: 1024px){
  width: 11.75rem;
  height: 17rem;
}

@media (max-width: 1024px) and (min-width: 768px){
  width: 10rem;
  height: 14.5rem;
}

@media (max-width: 768px) and (min-width: 480px){
  width: 9rem;
  height: 13rem;
}

@media (max-width: 480px) and (min-width: 320px){
  width: 7rem;
  height: 10rem;
}

@media (max-width: 320px){
  width: 6rem;
  height: 9rem;
}
`

export const InclusionImageApresentation2 = styled.img`
width: 13.75rem;
height: 19.8125rem;

@media (max-width: 1200px) and (min-width: 1024px){
  width: 11.75rem;
  height: 17rem;
}

@media (max-width: 1024px) and (min-width: 768px){
  width: 10rem;
  height: 15rem;
}

@media (max-width: 768px) and (min-width: 480px){
  width: 9rem;
  height: 13rem;
}

@media (max-width: 480px) and (min-width: 320px){
  width: 7rem;
  height: 11rem;
}

@media (max-width: 320px){
  width: 6rem;
  height: 9rem;
}
`
export const InclusionImageApresentation3 = styled.img`
width: 13.75rem;
height: 16.375rem;
display: flex;
align-items: flex-end;

@media (max-width: 1200px) and (min-width: 1024px){
  width: 11.75rem;
  height: 13.60rem;
}

@media (max-width: 1024px) and (min-width: 768px){
  width: 10rem;
  height: 11.5rem;
}

@media (max-width: 768px) and (min-width: 480px){
  width: 9rem;
  height: 9.5rem;
}

@media (max-width: 480px) and (min-width: 320px){
  width: 7rem;
  height: 7.5rem;
}

@media (max-width: 320px){
  width: 6rem;
  height: 5.65rem;
}
`