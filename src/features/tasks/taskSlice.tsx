import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const TaskViewIdSlice = createSlice({
	name: 'TaskViewIdSlice',
	initialState: { currentTaskId: '' },
	reducers: {
		changeCurrentTask: (state, action: PayloadAction<string>) => {
			return (state = { currentTaskId: action.payload });
		},
	},
});

export const { changeCurrentTask } = TaskViewIdSlice.actions;

export const selectCurrentTask = (state: RootState) => state.currentTask.currentTaskId;

export default TaskViewIdSlice.reducer;
