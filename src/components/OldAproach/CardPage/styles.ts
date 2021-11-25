import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
display: grid;
grid-template-columns: 25% 75%;
  
`;

export const Aside = styled.aside`

  
`;

export const Main = styled.aside`

  
`;

interface TextIProps {
    Ttitle?: string;
    title?: string;
}

export const Text = styled.p<TextIProps>`
font-family: 'Open Sans', sans-serif;
color: #ffffff;
line-height: 22px;
${(props) =>
        props.Ttitle &&
        css`
    font-weight: bold;
    `};
    ${(props) =>
        props.title &&
        css`
    color: #94b387;
    font-size: 32px;
    `},
    :a {
        transition: color 300ms, background-color 300ms;
    }
`;

export const Image = styled.img`
max-width: 100%;
${(props) =>
        props.title &&
        css`
    font-weight: bold;
    `}
`;

