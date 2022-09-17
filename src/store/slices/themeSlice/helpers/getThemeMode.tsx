import theme from '../../../../theme/theme';
import { ThemeVariant } from '../type/themeVariant.type';

export const getThemeMode = (themeSlice: ThemeVariant) => {
	const themeMode = themeSlice.theme;
	if (themeMode === 'themeDark') {
		return { ...theme, ...theme[themeMode] };
	}
	return theme;
};
