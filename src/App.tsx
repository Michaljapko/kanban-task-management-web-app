import LandingPage from './components/LandingPage';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './app/hooks';
import { selectThemeMode } from './features/layout/themeSlice';

function App() {
	const newTheme = useAppSelector(selectThemeMode);
	return (
		<ThemeProvider theme={newTheme}>
			<GlobalStyle />
			<LandingPage />
		</ThemeProvider>
	);
}

export default App;
