import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const columnSlice = createSlice({
	name: 'currentColumnId',
	initialState: '',
	reducers: {
		changeColumn: (state, action: PayloadAction<string>) => {
			return (state = action.payload);
		},
	},
});

export const { changeColumn } = columnSlice.actions;

export const selectCurrentColumn = (state: RootState) => state.currentColumnId;

export default columnSlice.reducer;
