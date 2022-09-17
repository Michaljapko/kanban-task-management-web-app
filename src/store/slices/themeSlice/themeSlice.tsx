import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { toogleThemeReducer } from './helpers/toogleTheme';
import { getThemeMode } from './helpers/getThemeMode';
import { ThemeVariant } from './type/themeVariant.type';

const initialState: () => ThemeVariant = () => {
	if (localStorage.getItem('themeSlice')) {
		return JSON.parse(localStorage.getItem('themeSlice')!);
	}
	return { theme: 'themeLight' };
};

export const themeSlice = createSlice({
	name: 'themeSlice',
	initialState,
	reducers: {
		toogleTheme: (state) => toogleThemeReducer(state),
	},
});

export const { toogleTheme } = themeSlice.actions;

export const selectCurrentTheme = ({ themeSlice }: RootState) =>
	themeSlice.theme;

export const selectThemeMode = ({ themeSlice }: RootState) =>
	getThemeMode(themeSlice);

export default themeSlice.reducer;
