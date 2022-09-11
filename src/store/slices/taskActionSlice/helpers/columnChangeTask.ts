import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { ColumnChangeType, Boards } from '../../../../types';

export const columnChangeTaskReducer = (
	state: WritableDraft<Boards>,
	payload: ColumnChangeType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
	const taskIndex = getTaskIndex(state, boardIndex, columnIndex, payload.taskId);

	const taskToChange = (state.boards[boardIndex].columns[columnIndex].tasks[
		taskIndex
	] = payload.task);
	state.boards[boardIndex].columns[columnIndex].tasks = state.boards[
		boardIndex
	].columns[columnIndex].tasks.filter((task) => {
		return payload.taskId !== task.id;
	});

	const columnIndexTarget = state.boards[boardIndex].columns.findIndex(
		(column) => column.id === payload.columnTarget
	);
	state.boards[boardIndex].columns[columnIndexTarget].tasks = [
		...state.boards[boardIndex].columns[columnIndexTarget].tasks,
		taskToChange,
	];
};
