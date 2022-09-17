import LandingPage from './components/LandingPage';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks';
import { selectThemeMode } from './store/slices/themeSlice/themeSlice';
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
