import LandingPage from './components/LandingPage';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './app/hooks';
import { selectThemeMode } from './features/layout/themeSlice';
import { useDetectScreen } from './hooks/useDetectScreen';

function App() {
	const newTheme = useAppSelector(selectThemeMode);

	useDetectScreen();

	return (
		<ThemeProvider theme={newTheme}>
			<GlobalStyle />
			<LandingPage />
		</ThemeProvider>
	);
}

export default App;
