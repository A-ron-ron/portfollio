import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background:${props => props.theme.bg};
        color: ${props => props.theme.ttheme};
        font-size: 16px;
        margin: 0;
    }
`;
