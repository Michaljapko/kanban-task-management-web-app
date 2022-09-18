import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from 'store/slices/helpers/reducersHelpers';
import { RootState } from 'store/store';

export const getCurrentTaskName = (state: RootState) => {
	if (!state.kanbanSlice.currentTaskId) return '';

	const boardIndex = getBoardIndex(
		state.kanbanSlice.data,
		state.kanbanSlice.currentBoardId
	);
	const columnIndex = getColumnIndex(
		state.kanbanSlice.data,
		boardIndex,
		state.kanbanSlice.currentColumnId
	);
	const taskIndex = getTaskIndex(
		state.kanbanSlice.data,
		boardIndex,
		columnIndex,
		state.kanbanSlice.currentTaskId
	);
	return state.kanbanSlice.data.boards[boardIndex].columns[columnIndex].tasks[
		taskIndex
	].title;
};
