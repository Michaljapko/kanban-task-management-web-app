import {
	getBoardIndex,
	getColumnIndex,
} from '../../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { AddTaskType, Boards } from '../../../../types';

export const addTaskReducer = (
	state: WritableDraft<Boards>,
	payload: AddTaskType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	const columnIndex = getColumnIndex(state, boardIndex, payload.task.status);
	
	state.boards[boardIndex].columns[columnIndex].tasks = [
		...state.boards[boardIndex].columns[columnIndex].tasks,
		payload.task,
	];
};
