import React from 'react';
import LandingPage from './components/LandingPage';
import GlobalStyle from './globalStyles';
import whiteTheme from './theme/whiteTheme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={whiteTheme}>
			<GlobalStyle />
			<LandingPage />
		</ThemeProvider>
	);
}

export default App;
