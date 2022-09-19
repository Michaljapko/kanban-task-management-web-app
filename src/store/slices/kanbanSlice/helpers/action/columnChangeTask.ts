import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { ColumnChangeType } from '../../types/columnChange.type';
import { KanbanSlice } from '../../types/kanbanSlice';

export const columnChangeTaskReducer = (
	{ data, currentBoardId }: WritableDraft<KanbanSlice>,
	{ columnId, taskId, columnTarget }: ColumnChangeType
) => {
	const boardIndex = getBoardIndex(data, currentBoardId);
	const columnIndex = getColumnIndex(data, boardIndex, columnId);
	const taskIndex = getTaskIndex(data, boardIndex, columnIndex, taskId);

	const taskToChange =
		data.boards[boardIndex].columns[columnIndex].tasks[taskIndex];

	const filterTasks = data.boards[boardIndex].columns[columnIndex].tasks.filter(
		(task) => taskId !== task.id
	);

	data.boards[boardIndex].columns[columnIndex].tasks = filterTasks;

	const columnIndexTarget = data.boards[boardIndex].columns.findIndex(
		(column) => column.id === columnTarget
	);
	data.boards[boardIndex].columns[columnIndexTarget].tasks = [
		...data.boards[boardIndex].columns[columnIndexTarget].tasks,
		taskToChange,
	];
};
