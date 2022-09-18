import { getBoardIndex, getColumnIndex } from '../../helpers/reducersHelpers';
import { RootState } from '../../../store';

export const getTaskData = (state: RootState) => {
	const boardIndex = getBoardIndex(state.kanbanSlice.data, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.kanbanSlice.data,
		boardIndex,
		state.currentColumnId
	);
	return state.kanbanSlice.data.boards[boardIndex].columns[columnIndex].tasks;
};
