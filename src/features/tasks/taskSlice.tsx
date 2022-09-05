import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
	getBoardIndex,
	getColumnIndex,
	getTaskIndex,
} from '../../helpers/reducersHelpers';

export const TaskViewIdSlice = createSlice({
	name: 'TaskViewIdSlice',
	initialState: { currentTaskId: '' },
	reducers: {
		changeCurrentTask: (state, action: PayloadAction<string>) =>
			(state = { currentTaskId: action.payload }),
	},
});

export const { changeCurrentTask } = TaskViewIdSlice.actions;

export const selectCurrentTask = (state: RootState) =>
	state.currentTask.currentTaskId;

export const selectCurrentTaskName = (state: RootState) => {
	if (!state.currentTask.currentTaskId) return '';
	if (!state.currentTask.currentTaskId) return '';
	const boardIndex = getBoardIndex(state.taskAction, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.taskAction,
		boardIndex,
		state.currentColumnId
	);
	const taskIndex = getTaskIndex(
		state.taskAction,
		boardIndex,
		columnIndex,
		state.currentTask.currentTaskId
	);
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks[
		taskIndex
	].title;
};
export default TaskViewIdSlice.reducer;
