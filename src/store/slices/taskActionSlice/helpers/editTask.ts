import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';

import { EditTaskType } from '../types/editTask.type';
import { Boards } from 'data/types/boards.type';

export const editTaskReducer = (
	state: WritableDraft<Boards>,
	payload: EditTaskType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
	const taskIndex = getTaskIndex(state, boardIndex, columnIndex, payload.taskId);
	state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] = payload.task;
};
