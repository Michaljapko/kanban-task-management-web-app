import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { getCurrentTaskName } from './helper/getCurrentTaskName';

const initialState = { currentTaskId: '' };

export const TaskViewIdSlice = createSlice({
	name: 'TaskViewIdSlice',
	initialState,
	reducers: {
		changeCurrentTask: (state, action: PayloadAction<string>) =>
			(state = { currentTaskId: action.payload }),
	},
});
export const { changeCurrentTask } = TaskViewIdSlice.actions;


export const selectCurrentTask = (state: RootState) =>
	state.currentTask.currentTaskId;

export const selectCurrentTaskName = (state: RootState) =>
	getCurrentTaskName(state);

export default TaskViewIdSlice.reducer;
