import styled from 'styled-components'

export const SectionWrapper = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem 1rem 0;
`

export const ContentComunicacaoDiv = styled.div`
    
`

export const TextVideoSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 9rem;
    justify-content: space-between;
`

export const PesquisaSection = styled.section`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 1.5rem;
    align-items: flex-end;
    margin-bottom: 2.5rem;
`

export const ButtonDiv = styled.div`
    position: relative;

    svg {
        position: absolute;
        right: 10px;
        top: 70%;
        transform: translateY(-50%);
    }

`

export const PesquisaButton = styled.button`
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: start;
    background-color: #212529;
    margin-top: 2rem;
    color: #99F6E0;
    height: 2.5rem;
    width: 9rem;
    font-size: 1.1rem;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const PraticaDivCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem; 
    margin-bottom: 5rem;
 `

export const PraticaCards = styled.div`
    width: 21rem;
    height: 30rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
 `
 
 export const CardDivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B9E6FE;
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;

 `

 export const CardInfoDiv = styled.div`
    padding: 0 1rem;
 `