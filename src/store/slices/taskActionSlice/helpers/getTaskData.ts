import {
	getBoardIndex,
	getColumnIndex,
} from '../../../../helpers/reducersHelpers';
import { RootState } from '../../../store';

export const getTaskData = (state: RootState) => {
	const boardIndex = getBoardIndex(state.taskAction, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.taskAction,
		boardIndex,
		state.currentColumnId
	);
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks;
};
