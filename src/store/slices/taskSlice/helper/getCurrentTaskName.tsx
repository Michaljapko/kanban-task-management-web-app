import { RootState } from '../../../store';
import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../helpers/reducersHelpers';

export const getCurrentTaskName = (state: RootState) => {
	if (!state.currentTask.currentTaskId) return '';

	const boardIndex = getBoardIndex(state.kanbanSlice.data, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.kanbanSlice.data,
		boardIndex,
		state.currentColumnId
	);
	const taskIndex = getTaskIndex(
		state.kanbanSlice.data,
		boardIndex,
		columnIndex,
		state.currentTask.currentTaskId
	);
	return state.kanbanSlice.data.boards[boardIndex].columns[columnIndex].tasks[
		taskIndex
	].title;
};
