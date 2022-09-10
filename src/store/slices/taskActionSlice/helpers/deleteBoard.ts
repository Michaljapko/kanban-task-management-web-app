
import { WritableDraft } from 'immer/dist/internal';
import { Boards } from '../../../../types';

export const deleteBoardReducer = (
	state: WritableDraft<Boards>,
	payload: string
) => {
	state.boards = state.boards.filter((board) => {
		return payload !== board.id;
	});
};
