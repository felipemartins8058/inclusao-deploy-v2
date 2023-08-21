'use client'
import styled from 'styled-components'

export const DivExp = styled.section`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;

  @media (max-width: 480px){
    padding: 2rem 2rem;
  }
`

export const DivInsideExperience = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const DivUpTextExp = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #fecdd6 0% 22%, white 22% 100%);
`

export const H2Exp = styled.h2`
  font-size: 2rem;
`
export const TextExperience = styled.p`
  font-size: 1rem;
  padding-top: 1.5rem;
  text-align: center;
`

export const DivInsideExperienceUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;
  row-gap: 4rem;
  column-gap: 3.5rem;

  @media (max-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 425px){
    grid-template-columns: repeat(2, 1fr);
  }

`

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
`

export const UserImg = styled.img`
  /* width: 7rem;
  height: 2rem; */
`
