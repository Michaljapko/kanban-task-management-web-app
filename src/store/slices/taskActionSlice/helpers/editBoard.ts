import { getBoardIndex } from '../../../../helpers/reducersHelpers';
import { EditBoardType } from '../../../../types';
import { WritableDraft } from 'immer/dist/internal';
import { Boards } from '../../../../types';

export const editBoardReducer = (
	state: WritableDraft<Boards>,
	payload: EditBoardType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	state.boards[boardIndex] = payload.board;
};
