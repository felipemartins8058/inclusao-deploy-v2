import styled from "styled-components";

export const MainLogin = styled.main`
`

export const LoginWrapper = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9rem;
    align-items: center;

    @media (max-width: 1366px) {
        gap: 4rem;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    form{
        button{
            margin-top: 2rem;
        }
    }

`