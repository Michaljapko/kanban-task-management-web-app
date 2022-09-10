import { ThemeVariant } from '../../../../types';
import theme from '../../../../theme/theme';

export const getThemeMode = (themeSlice: ThemeVariant) => {
	const themeMode = themeSlice.theme;
	if (themeMode === 'themeDark') {
		return { ...theme, ...theme[themeMode] };
	}
	return theme;
};
