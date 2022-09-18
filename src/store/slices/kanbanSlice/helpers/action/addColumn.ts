import { getBoardIndex } from '../../../helpers/reducersHelpers';
import { WritableDraft } from 'immer/dist/internal';
import { AddColumnType } from '../../types/addColumn.type';
import { Boards } from 'data/types/boards.type';

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
