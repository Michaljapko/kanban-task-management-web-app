import { RootState } from '../../../store';

export const getTasksData = (state: RootState) => {
	console.log(state);
	const board = state.kanbanSlice.data.boards.find(
		(board) => board.id === state.currentBoardId
	);
	return board?.columns;
};
