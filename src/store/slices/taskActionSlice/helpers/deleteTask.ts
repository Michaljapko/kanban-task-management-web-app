import { getBoardIndex, getColumnIndex } from '../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';

import { DeleteTaskType } from '../types/deleteTask.type';
import { Boards } from 'data/types/boards.type';

export const deleteTaskReducer = (
	state: WritableDraft<Boards>,
	payload: DeleteTaskType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
	const newTasks = state.boards[boardIndex].columns[columnIndex].tasks.filter(
		(task) => task.id !== payload.taskId
	);
	state.boards[boardIndex].columns[columnIndex].tasks = newTasks;
};
