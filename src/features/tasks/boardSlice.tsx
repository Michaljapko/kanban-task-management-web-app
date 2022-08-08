import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const boardSlice = createSlice({
	name: 'currentBoardId',
	initialState: '',
	reducers: {
		changeBoard: (state, action: PayloadAction<string>) => (state = action.payload),
	},
});

export const { changeBoard } = boardSlice.actions;

export const selectCurrentBoard = ({ currentBoardId }: RootState) => currentBoardId;

export const selectCurrentBoardIndex = (state: RootState) => state.tasks.boards.findIndex((board) => board.id === state.currentBoardId);

export const selectBoards = ({ tasks }: RootState) => tasks.boards.map((board) => board);

export default boardSlice.reducer;
