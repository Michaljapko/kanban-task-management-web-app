import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const columnSlice = createSlice({
	name: 'currentColumnId',
	initialState: '',
	reducers: {
		changeColumn: (state, action: PayloadAction<string>) =>
			(state = action.payload),
	},
});

export const { changeColumn } = columnSlice.actions;

export const selectCurrentColumn = ({ currentColumnId }: RootState) =>
	currentColumnId;


export default columnSlice.reducer;
