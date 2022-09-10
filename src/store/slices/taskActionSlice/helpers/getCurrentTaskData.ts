import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../../../helpers/reducersHelpers';
import { RootState } from '../../../store';

export const getCurrentTaskData = (state: RootState) => {
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
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks[
		taskIndex
	];
};
