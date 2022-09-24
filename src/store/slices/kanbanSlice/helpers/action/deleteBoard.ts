import { WritableDraft } from 'immer/dist/internal';
import { KanbanSlice } from '../../types/kanbanSlice';

export const deleteBoardReducer = ({ data, currentBoardId }: WritableDraft<KanbanSlice>) => {
  data.boards = data.boards.filter((board) => currentBoardId !== board.id);
};
