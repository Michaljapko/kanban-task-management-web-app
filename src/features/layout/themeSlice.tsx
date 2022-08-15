import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import theme from '../../theme/theme';

const initialState: { theme: 'themeLight' | 'themeDark' } = {
	theme: 'themeLight',
};
export const themeSlice = createSlice({
	name: 'themeSlice',
	initialState,
	reducers: {
		toogleTheme: (state) => {
			if (state.theme === 'themeLight') return (state = { theme: 'themeDark' });
			return (state = { theme: 'themeLight' });
		},
	},
});

export const { toogleTheme } = themeSlice.actions;

export const selectThemeMode = ({ themeSlice }: RootState) => {
	const themeMode = themeSlice.theme;
	if (themeMode === 'themeDark') return { ...theme, ...theme[themeMode] };
	return theme;
};

export default themeSlice.reducer;
