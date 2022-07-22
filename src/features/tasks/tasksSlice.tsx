import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface tasksData {
	title: string;
	describe: string;
	subtask: string[];
	status: 'doing' | 'todo';
}

const initialState: tasksData[] = [
	{
		title: 'Zrobić cos',
		describe: 'Bla bla bla',
		subtask: ['1', '2', '3'],
		status: 'doing',
	},
];

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<tasksData>) => {
			return state = [...state, action.payload];
		},
	},
});

export const { addTask } = tasksSlice.actions;

export const selectCount = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
