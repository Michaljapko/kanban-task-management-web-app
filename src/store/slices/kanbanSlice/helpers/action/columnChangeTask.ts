import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { ColumnChangeType } from '../../types/columnChange.type';
import { KanbanSlice } from '../../types/kanbanSlice';

export const columnChangeTaskReducer = (
	state: WritableDraft<KanbanSlice>,
	payload: ColumnChangeType
) => {
	const boardIndex = getBoardIndex(state.data, state.currentBoardId);
	const columnIndex = getColumnIndex(state.data, boardIndex, payload.columnId);
	const taskIndex = getTaskIndex(
		state.data,
		boardIndex,
		columnIndex,
		payload.taskId
	);

	const taskToChange =
		state.data.boards[boardIndex].columns[columnIndex].tasks[taskIndex];

	const filterTasks = state.data.boards[boardIndex].columns[
		columnIndex
	].tasks.filter((task) => payload.taskId !== task.id);

	state.data.boards[boardIndex].columns[columnIndex].tasks = filterTasks;

	const columnIndexTarget = state.data.boards[boardIndex].columns.findIndex(
		(column) => column.id === payload.columnTarget
	);
	state.data.boards[boardIndex].columns[columnIndexTarget].tasks = [
		...state.data.boards[boardIndex].columns[columnIndexTarget].tasks,
		taskToChange,
	];
};
