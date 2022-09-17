import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
const GlobalStyle = createGlobalStyle`

${normalize}

::-webkit-scrollbar {
    display: none;
}
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    height: 100vh;
	background: ${({ theme }) => theme.backgroundBody};
  }

`;

export default GlobalStyle;
