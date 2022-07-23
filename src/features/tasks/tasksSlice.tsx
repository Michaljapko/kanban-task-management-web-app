import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { tasksData } from '../../Types/types';

const initialState: tasksData[] = [];

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<tasksData>) => {
			return (state = [...state, action.payload]);
		},
	},
});

export const { addTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
