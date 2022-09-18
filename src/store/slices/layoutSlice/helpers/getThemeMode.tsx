import theme from 'theme/theme';
import { ThemeVariant } from '../types/themeVariant.type';

export const getThemeMode = (layoutSliceTheme: ThemeVariant) => {
	const themeMode = layoutSliceTheme;
	if (themeMode === 'themeDark') {
		return { ...theme, ...theme[themeMode] };
	}
	return theme;
};
