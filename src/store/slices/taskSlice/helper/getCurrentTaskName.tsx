import { RootState } from '../../../store';
import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../../../helpers/reducersHelpers';

export const getCurrentTaskName = (state: RootState) => {
	if (!state.currentTask.currentTaskId) return '';
    
	const boardIndex = getBoardIndex(state.taskAction, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.taskAction,
		boardIndex,
		state.currentColumnId
	);
	const taskIndex = getTaskIndex(
		state.taskAction,
		boardIndex,
		columnIndex,
		state.currentTask.currentTaskId
	);
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks[taskIndex]
		.title;
};
