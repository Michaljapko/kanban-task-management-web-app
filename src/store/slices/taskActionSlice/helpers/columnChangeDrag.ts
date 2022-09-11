import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { ColumnChangeDragType, Boards } from '../../../../types';

export const columnChangeTaskDragReducer = (
	state: WritableDraft<Boards>,
	payload: ColumnChangeDragType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
	const taskIndex = getTaskIndex(state, boardIndex, columnIndex, payload.taskId);

	const taskToChange =
		state.boards[boardIndex].columns[columnIndex].tasks[taskIndex];
	state.boards[boardIndex].columns[columnIndex].tasks = state.boards[
		boardIndex
	].columns[columnIndex].tasks.filter((task) => {
		return payload.taskId !== task.id;
	});
	const columnIndexTarget = state.boards[boardIndex].columns.findIndex(
		(column) => column.id === payload.columnTarget
	);
	const newTasks = state.boards[boardIndex].columns[columnIndexTarget].tasks;
	newTasks.splice(payload.index, 0, taskToChange);
	state.boards[boardIndex].columns[columnIndexTarget].tasks = newTasks;
};
