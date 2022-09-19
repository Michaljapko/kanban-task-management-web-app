import {
	getBoardIndex,
	getColumnIndex,
} from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { KanbanSlice } from '../../types/kanbanSlice';

export const deleteTaskReducer = ({
	data,
	currentBoardId,
	currentColumnId,
	currentTaskId,
}: WritableDraft<KanbanSlice>) => {
	const boardIndex = getBoardIndex(data, currentBoardId);
	const columnIndex = getColumnIndex(data, boardIndex, currentColumnId);
	const newTasks = data.boards[boardIndex].columns[columnIndex].tasks.filter(
		(task) => task.id !== currentTaskId
	);
	data.boards[boardIndex].columns[columnIndex].tasks = newTasks;
};
