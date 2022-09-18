import LandingPage from './components/LandingPage';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks';
import { useDetectScreen } from './hooks/useDetectScreen';
import { selectThemeMode } from 'store/slices/layoutSlice/layoutSlice';

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
