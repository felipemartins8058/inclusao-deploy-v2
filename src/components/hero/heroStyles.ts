'use client'
import styled from 'styled-components'

type H1props = {
  fontSize: number;
}

type H3props = {
  fontSize: number;
}

export const DivHero = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 5rem 0;

  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
  }

`

export const DivInsideLeft = styled.div`
  width: 31.25rem;
  height: 29rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 50rem;
    height: 25rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 44rem;
    height: 25rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 30rem;
    height: 23rem;
  }
`
export const DivInsideLeftBar = styled.div`
  width: 0.5rem;
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
  margin-left: 1rem;
`

export const DivInsideRight = styled.div`
  height: 29rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-row: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) and (min-width: 1024px){
    height: 27rem;
    grid-column-gap: 1.3rem;
    grid-row-gap: 1.3rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    height: 25rem;
    grid-column-gap: 1.2rem;
    grid-row-gap: 1.2rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    height: 20rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    height: 20rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media (max-width: 320px) {
    height: 20rem;
    grid-column-gap: 1rem;
    grid-row-gap: 0.3rem;
  }
`

export const SmallDivInsideRight = styled.div`
  background-color: #b9e6fe;
  width: 12.5rem;
  height: 13.75rem;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 13rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 12rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 11.5rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 10rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 9rem;
  }
`
export const SmallDivInsideRight2 = styled.div`
  background-color: #feee95;
  width: 12.5rem;
  height: 13.75rem;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 13rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 12rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 11.5rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 10rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 9rem;
  }
`

export const SmallDivInsideRight3 = styled.div`
  background-color: #99f6e0;
  width: 12.5rem;
  height: 13.75rem;
  height: 220px;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 13rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 12rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 11.5rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 10rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 9rem;
  }
`

export const SmallDivInsideRight4 = styled.div`
  background-color: #fecdd6;
  width: 12.5rem;
  height: 13.75rem;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 13rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 12rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 11.5rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 10rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 9rem;
  }
`

export const BigDivInsideRight = styled.div`
  background-color: #d9d6fe;
  width: 12.5rem;
  height: 29rem;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 2;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 27rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 25rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 24rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 21rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 19rem;
  }
`

export const BigDivInsideRight2 = styled.div`
  background-color: #b9e6fe;
  width: 12.5rem;
  height: 29rem;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 4;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 27rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 25rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 24rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 21rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 19rem;
  }
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
    height: 12rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 11.5rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 10rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 9rem;
  }
`

export const InclusionBigImage = styled.img`
  width: 12.5rem;
  height: 27rem;

  @media (max-width: 1200px) and (min-width: 1024px){
    width: 11.5rem;
    height: 26rem;
  }

  @media (max-width: 1024px) and (min-width: 768px){
    width: 10rem;
    height: 24rem;
  }

  @media (max-width: 768px) and (min-width: 480px){
    width: 9rem;
    height: 23rem;
  }

  @media (max-width: 480px) and (min-width: 320px){
    width: 8rem;
    height: 20rem;
  }

  @media (max-width: 320px){
    width: 7rem;
    height: 18rem;
  }
`
