import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ThemeVariant } from '../../../types';
import { toogleThemeReducer } from './helpers/toogleTheme';
import { getThemeMode } from './helpers/getThemeMode';

const initialState: ThemeVariant = {
	theme: 'themeLight',
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
