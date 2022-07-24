import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const boardSlice = createSlice({
	name: 'currentBoard',
	initialState: '',
	reducers: {
		changeBoard: (state, action: PayloadAction<string>) => {
			return (state = action.payload);
			
		},
	},
});

export const { changeBoard } = boardSlice.actions;

export const selectCurrentBoard = (state: RootState) => state.currentBoard;

export const selectBoards = (state: RootState) =>
	state.tasks.boards.map((board) => {
		return board.name;
	});

export default boardSlice.reducer;
