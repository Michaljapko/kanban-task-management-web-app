import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { Boards } from '../../Types/types';
import { data } from '../../data/data';
import { v4 as uuid } from 'uuid';

const initialState: Boards = data;

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<any>) => {
			const boardIndex = state.boards.findIndex((board) => board.id === action.payload.currentBoard);
			const columnIndex = state.boards[boardIndex].columns.findIndex((column) => column.name === action.payload.task.status);
			state.boards[boardIndex].columns[columnIndex].tasks = [...state.boards[boardIndex].columns[columnIndex].tasks, action.payload.task];
		},
		addBoard: (state, action: PayloadAction<any>) => {
			state.boards = [...state.boards, action.payload];
		},

		addColumn: (state, action: PayloadAction<any>) => {
			const boardIndex = state.boards.findIndex((board) => board.id === action.payload.currentBoard);
			state.boards[boardIndex].columns = [...state.boards[boardIndex].columns, { id: uuid(), name: action.payload.columnName, tasks: [] }];
		},
	},
});

export const { addTask, addBoard, addColumn } = tasksSlice.actions;

export const selectTasksData = (state: RootState) => {
	const board = state.tasks.boards.find((board) => board.id === state.currentBoardId);
	return board?.columns;
};

export default tasksSlice.reducer;
