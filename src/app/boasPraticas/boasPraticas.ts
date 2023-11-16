import styled from 'styled-components'

export const SectionWrapper = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem 1rem 0;
`

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3.5rem;
`

export const CardsCaracteristicasDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 992px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px){
      grid-template-columns: repeat(1, 1fr);
    }
`

export const CardDiv = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0.75rem;
    gap: 0.5rem;
    max-width: 29rem;
    background-color: #212529;

`

export const ItemsBoasPraticaDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`

export const BoaPraticaDiv = styled.div`
`

export const BoaPraticaSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BoasPraticasButton = styled.button`
    background-color: #212529;
    color: #99F6E0;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const BancoBoasPraticasDiv = styled.div`
    background-color: ${(props) => props.theme.color_background_dark};
    border-bottom: 1px solid ${(props) => props.theme.color_default_border};
    margin-top: 5rem;
    padding-bottom: 5rem;
`

export const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const BancoCardsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
`

export const InputDiv = styled.div`
    position: relative;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

`

export const InputPesquisar = styled.input`
    height: 2.5rem;
    width: 19.5rem;
`

export const CardBoasPraticas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background-color: white;
    width: 21rem;
    height: 19rem;
    gap: 1rem;
`

export const CardBoasPraticasDivImg = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 10.5rem;
    background-color: #D9D6FE;
`
    
export const CardBoasPraticasImg = styled.img`
    height: 12rem;
`

export const CardSectionInfo = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    gap: 1rem;
`

export const SeparatoCardBottomDiv = styled.div`
    width: 100%;
    background: #f7f9fa;
    border-top: 0.25px solid #ced4da;
    border-bottom: 0.25px solid #ced4da;
    height: 0.01rem;

    @media (max-width: 768px){
      margin-top: 0;
    }
`
