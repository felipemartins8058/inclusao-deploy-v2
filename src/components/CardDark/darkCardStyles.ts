import styled from "styled-components";

export const CardDiv = styled.div`
    padding: 1.5rem;
    background-color: ${(props) => props.theme.color_background_dark};
    border-radius: 4px;

    svg {
        margin-bottom: 1.5rem;
    }
`