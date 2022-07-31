import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const boardSlice = createSlice({
	name: 'currentBoardId',
	initialState: '',
	reducers: {
		changeBoard: (state, action: PayloadAction<string>) => {
			return (state = action.payload);
		},
	},
});

export const { changeBoard } = boardSlice.actions;

export const selectCurrentBoard = (state: RootState) => state.currentBoardId;

export const selectCurrentBoardIndex = (state: RootState) => state.tasks.boards.findIndex((board) => board.id === state.currentBoardId);

export const selectBoards = (state: RootState) =>
	state.tasks.boards.map((board) => {
		return board;
	});

export default boardSlice.reducer;
