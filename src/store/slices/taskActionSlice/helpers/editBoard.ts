import { getBoardIndex } from '../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { EditBoardType } from '../types/editBoard.type';
import { Boards } from '../../../../data/types/boards.type';

export const editBoardReducer = (
	state: WritableDraft<Boards>,
	payload: EditBoardType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	state.boards[boardIndex] = payload.board;
};
