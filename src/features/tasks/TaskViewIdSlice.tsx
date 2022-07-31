import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const TaskViewIdSlice = createSlice({
	name: 'TaskViewIdSlice',
	initialState: { task: { id: '', title: '', description: '', subtasks: [{ id: '', isCompleted: '' }] }, id: '' },
	reducers: {
		changeTaskViewId: (state, action: PayloadAction<string>) => {
			return (state = { ...state, id: action.payload });
		},
		setTaskView: (state, action: PayloadAction<any>) => {
			return (state = { ...state, task: action.payload });
		},
	},
});

export const { changeTaskViewId, setTaskView } = TaskViewIdSlice.actions;

export const selectTaskViewId = (state: RootState) => state.currentTaskViewId.id;
export const selectTaskView = (state: RootState) => state.currentTaskViewId.task;

export default TaskViewIdSlice.reducer;
