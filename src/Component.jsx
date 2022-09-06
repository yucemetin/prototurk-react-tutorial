import styled, { css } from "styled-components"

export const Title = styled.h1`
    font-size: 3rem;
    text-decoration: underline;
    color: #FF0000;
    ${props => props.theme === 'dark'
        && css`
        background: #000;
        color: #fff;
        &:hover{
            background: blue;
        }
    `}
    
    `
