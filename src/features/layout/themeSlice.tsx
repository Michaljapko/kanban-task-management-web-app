import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const themeSlice = createSlice({
	name: 'themeSlice',
	initialState: {
		theme: 'themeLight',
	},
	reducers: {
		toogleTheme: (state) => {
			if (state.theme === 'themeLight') return (state = { theme: 'themeDark' });
			return (state = { theme: 'themeLight' });
		},
	},
});

export const { toogleTheme } = themeSlice.actions;
export const selectThemeMode = ({ themeSlice }: RootState) => themeSlice.theme;

export default themeSlice.reducer;
