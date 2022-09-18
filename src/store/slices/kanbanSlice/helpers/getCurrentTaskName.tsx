import { RootState } from '../../../store';
import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../helpers/reducersHelpers';

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
