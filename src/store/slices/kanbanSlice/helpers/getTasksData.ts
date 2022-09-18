import { RootState } from '../../../store';

export const getTasksData = (state: RootState) => {
	const board = state.kanbanSlice.data.boards.find(
		(board) => board.id === state.kanbanSlice.currentBoardId
	);
	return board?.columns;
};
