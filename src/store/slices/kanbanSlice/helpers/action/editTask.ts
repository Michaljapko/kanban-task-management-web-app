import { getBoardIndex, getColumnIndex, getTaskIndex } from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { KanbanSlice } from '../../types/kanbanSlice';
import { TasksData } from 'data/types/taskData.type';

export const editTaskReducer = (
  { data, currentBoardId, currentColumnId, currentTaskId }: WritableDraft<KanbanSlice>,
  { task }: { task: TasksData }
) => {
  const boardIndex = getBoardIndex(data, currentBoardId);
  const columnIndex = getColumnIndex(data, boardIndex, currentColumnId);
  const taskIndex = getTaskIndex(data, boardIndex, columnIndex, currentTaskId);
  data.boards[boardIndex].columns[columnIndex].tasks[taskIndex] = task;
};
