import { getBoardIndex } from '../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { AddColumnType, Boards } from '../../../../types';

export const addColumReducer = (
	state: WritableDraft<Boards>,
	payload: AddColumnType
) => {
	const boardIndex = getBoardIndex(state, payload.currentBoard);
	state.boards[boardIndex].columns = [
		...state.boards[boardIndex].columns,
		payload.column,
	];
};
