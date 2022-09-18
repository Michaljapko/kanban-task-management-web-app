import { getBoardIndex, getColumnIndex } from "store/slices/helpers/reducersHelpers";
import { RootState } from "store/store";


export const getTaskData = (state: RootState) => {
	const boardIndex = getBoardIndex(
		state.kanbanSlice.data,
		state.kanbanSlice.currentBoardId
	);
	const columnIndex = getColumnIndex(
		state.kanbanSlice.data,
		boardIndex,
		state.kanbanSlice.currentColumnId
	);
	return state.kanbanSlice.data.boards[boardIndex].columns[columnIndex].tasks;
};
