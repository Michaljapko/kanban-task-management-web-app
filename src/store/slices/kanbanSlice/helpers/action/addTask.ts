import {
	getBoardIndex,
	getColumnIndex,
} from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { KanbanSlice } from '../../types/kanbanSlice';
import { TasksData } from 'data/types/taskData.type';

export const addTaskReducer = (
	{ data, currentBoardId }: WritableDraft<KanbanSlice>,
	{ task }: { task: TasksData }
) => {
	const boardIndex = getBoardIndex(data, currentBoardId);
	const columnIndex = getColumnIndex(data, boardIndex, task.status);

	data.boards[boardIndex].columns[columnIndex].tasks = [
		...data.boards[boardIndex].columns[columnIndex].tasks,
		task,
	];
};
