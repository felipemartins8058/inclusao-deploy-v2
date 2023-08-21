import styled from 'styled-components'

interface TextInputProps {
    fontSize: number;
}

export const FormGroup = styled.div`
    margin-bottom: .5rem;
`

export const TextInput = styled.input<TextInputProps>`
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color_default_border};
    background: ${(props) => props.theme.color_background_light};
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
    padding: 0.625rem 1rem;
    width: 100%;

    &::placeholder{
        font-size: ${(props) => props.fontSize}px;
        //font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: ${(props) => props.theme.color_placeholder};
    }
`