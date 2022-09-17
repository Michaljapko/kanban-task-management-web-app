import { WritableDraft } from 'immer/dist/internal';
import { Boards } from '../../../../data/types/boards.type';

export const deleteBoardReducer = (
	state: WritableDraft<Boards>,
	payload: string
) => {
	state.boards = state.boards.filter((board) => {
		return payload !== board.id;
	});
};
