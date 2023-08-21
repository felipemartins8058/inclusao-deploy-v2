import styled from 'styled-components'

export const MainInformativo = styled.main`

`

export const InfortativosSection = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InformativosGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 728px) {
        grid-template-columns: 1fr;
    }
`