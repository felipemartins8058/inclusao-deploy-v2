'use client'

import styled from 'styled-components'

export const DivSquares = styled.div`
  width: 708px;
  height: 708px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-areas:
    'a b b'
    'c e j'
    'd f j';
`

export const SmallDivInsideRight = styled.div`
  background-color: #fecdd6;
  width: 220px;
  height: 220px;
  grid-area: a;
  display: flex;
  align-items: flex-end;
`
export const SmallDivInsideRight2 = styled.div`
  background-color: #d9d6fe;
  width: 220px;
  height: 220px;
  grid-area: c;
  display: flex;
  padding: 1.5rem 1.5rem;
`

export const SmallDivInsideRight3 = styled.div`
  background-color: #b9e6fe;
  width: 220px;
  height: 220px;
  grid-area: d;

  display: flex;
  align-items: flex-end;
`

export const SmallDivInsideRight4 = styled.div`
  background-color: #d9d6fe;
  width: 220px;
  height: 220px;
  grid-area: e;
  display: flex;
  align-items: flex-end;
`

export const SmallDivInsideRight5 = styled.div`
  background-color: #99f6e0;
  width: 220px;
  height: 220px;
  grid-area: f;
  display: flex;
  align-items: flex-end;
`

export const BigDivInsideRight = styled.div`
  background-color: #99f6e0;
  max-width: 464px;
  min-width: 440px;
  height: 220px;
  grid-area: b;
  display: flex;
  padding: 1.5rem 1.5rem;
`

export const BigDivInsideRight2 = styled.div`
  background-color: #feee95;
  width: 220px;
  height: 464px;
  grid-area: j;
  display: flex;
  align-items: flex-end;
`

export const InclusionImageLogin = styled.img`
  max-width: 200px;
`

export const H4 = styled.h2`
  font-size: 1.5rem;
`
