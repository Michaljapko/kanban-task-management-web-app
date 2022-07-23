import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TasksData } from '../../Types/types';
import { Boards } from '../../Types/types';
import { data } from '../../data/data';

const initialState: Boards = data;

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<TasksData>) => {
			// return (state = [...state, action.payload]);
			console.log('123');
		},
		addBoard: (state, action: PayloadAction<string>) => {
			state.boards.push({ name: action.payload, columns: [] });
		},
	},
});

export const { addTask, addBoard } = tasksSlice.actions;
export const selectTasks = (state: RootState) => {
	const board = state.tasks.boards.find((board) => board.name === state.currentBoard);
	return board?.columns;
};

export default tasksSlice.reducer;
