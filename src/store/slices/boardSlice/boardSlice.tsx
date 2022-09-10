import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const boardSlice = createSlice({
	name: 'currentBoardId',
	initialState: '',
	reducers: {
		changeBoard: (state, action: PayloadAction<string>) =>
			(state = action.payload),
	},
});

export const { changeBoard } = boardSlice.actions;

export const selectCurrentBoard = ({ currentBoardId }: RootState) =>
	currentBoardId;

export const selectCurrentBoardIndex = (state: RootState) =>
	state.taskAction.boards.findIndex((board) => board.id === state.currentBoardId);

export const selectCurrentBoardData = ({
	currentBoardId,
	taskAction,
}: RootState) => {
	const currentBoard = taskAction.boards.find(
		(board) => board.id === currentBoardId
	);
	return currentBoard!;
};

export const selectCurrentBoardName = ({
	currentBoardId,
	taskAction,
}: RootState) => {
	const currentBoard = taskAction.boards.find(
		(board) => board.id === currentBoardId
	);
	return currentBoard!.name;
};

export const selectBoards = ({ taskAction }: RootState) =>
taskAction.boards.map((board) => board);

export default boardSlice.reducer;
