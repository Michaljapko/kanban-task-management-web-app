import React from 'react';
import LandingPage from './components/LandingPage';
import GlobalStyle from './globalStyles';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<LandingPage />
		</ThemeProvider>
	);
}

export default App;
