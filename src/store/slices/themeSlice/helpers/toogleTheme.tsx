import { WritableDraft } from 'immer/dist/internal';
import { ThemeVariant } from '../../../../types';

export const toogleThemeReducer = (state: WritableDraft<ThemeVariant>) => {
	if (state.theme === 'themeLight') {
		return (state = { theme: 'themeDark' });
	}
	return (state = { theme: 'themeLight' });
};
