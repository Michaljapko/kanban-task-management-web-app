import { RootState } from '../../../store';

export const getTasksData = (state: RootState) => {
	const board = state.taskAction.boards.find(
		(board) => board.id === state.currentBoardId
	);
	return board?.columns;
};
