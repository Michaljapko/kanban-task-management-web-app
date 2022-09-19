import { getBoardIndex } from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { KanbanSlice } from '../../types/kanbanSlice';
import { Board } from 'data/types/board.type';

export const editBoardReducer = (
	{ data, currentBoardId }: WritableDraft<KanbanSlice>,
	payload: { board: Board }
) => {
	const boardIndex = getBoardIndex(data, currentBoardId);
	data.boards[boardIndex] = payload.board;
};
