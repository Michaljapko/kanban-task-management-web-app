import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { ColumnChangeDragType } from '../../types/columnChangeDrag.type';
import { KanbanSlice } from '../../types/kanbanSlice';

export const columnChangeTaskDragReducer = (
	{ data, currentBoardId }: WritableDraft<KanbanSlice>,
	{ index, columnId, taskId, columnTarget }: ColumnChangeDragType
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
	const newTasks = data.boards[boardIndex].columns[columnIndexTarget].tasks;
	
	newTasks.splice(index, 0, taskToChange);
	data.boards[boardIndex].columns[columnIndexTarget].tasks = newTasks;
};
