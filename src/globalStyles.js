import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{box-sizing: border-box;}
  body {
    margin: 0;
    padding: 0;
    background: hsl(221, 69%, 94%);
    font-family: 'Plus Jakarta Sans', sans-serif;
    height:100vh;
    
  }

`;

export default GlobalStyle;
