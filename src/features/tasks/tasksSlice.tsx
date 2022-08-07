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

			const columnIndex = state.boards[boardIndex].columns.findIndex((column) => column.id === action.payload.task.status);

			state.boards[boardIndex].columns[columnIndex].tasks = [...state.boards[boardIndex].columns[columnIndex].tasks, action.payload.task];
		},
		addBoard: (state, action: PayloadAction<any>) => {
			state.boards = [...state.boards, action.payload];
		},
		editBoard: (state, action: PayloadAction<any>) => {
			const boardIndex = state.boards.findIndex((board) => board.id === action.payload.currentBoard);
			state.boards[boardIndex] = action.payload.board;
		},
		addColumn: (state, action: PayloadAction<any>) => {
			const boardIndex = state.boards.findIndex((board) => board.id === action.payload.currentBoard);
			state.boards[boardIndex].columns = [...state.boards[boardIndex].columns, { id: uuid(), name: action.payload.columnName, tasks: [] }];
		},
		taskEdit: (state, action: PayloadAction<any>) => {
			const boardIndex = state.boards.findIndex((board) => board.id === action.payload.currentBoard);
			const columnIndex = state.boards[boardIndex].columns.findIndex((column) => column.id === action.payload.columnId);
			const taskIndex = state.boards[boardIndex].columns[columnIndex].tasks.findIndex((task) => task.id === action.payload.taskId);
			state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] = action.payload.task;
		},
		taskColumnChange: (state, action: PayloadAction<any>) => {
			const boardIndex = state.boards.findIndex((board) => board.id === action.payload.currentBoard);
			const columnIndex = state.boards[boardIndex].columns.findIndex((column) => column.id === action.payload.columnId);
			const taskIndex = state.boards[boardIndex].columns[columnIndex].tasks.findIndex((task) => task.id === action.payload.taskId);
			const taskToChange = (state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] = action.payload.task);
			state.boards[boardIndex].columns[columnIndex].tasks = state.boards[boardIndex].columns[columnIndex].tasks.filter((task) => {
				return action.payload.taskId !== task.id;
			});
			const columnIndexTarget = state.boards[boardIndex].columns.findIndex((column) => column.id === action.payload.columnTarget);
			state.boards[boardIndex].columns[columnIndexTarget].tasks = [...state.boards[boardIndex].columns[columnIndexTarget].tasks, taskToChange];
		},

		deleteBoard: (state, action: PayloadAction<any>) => {
			state.boards = state.boards.filter((board) => {
				return action.payload !== board.id;
			});
		},
	},
});

export const { addTask, addBoard, addColumn, deleteBoard, taskEdit, editBoard, taskColumnChange } = tasksSlice.actions;

export const selectTasksData = (state: RootState) => {
	const board = state.tasks.boards.find((board) => board.id === state.currentBoardId);
	return board?.columns;
};

export const selectTaskData = (state: RootState) => {
	const boardIndex = state.tasks.boards.findIndex((board) => board.id === state.currentBoardId);
	const columnIndex = state.tasks.boards[boardIndex].columns.findIndex((column) => column.id === state.currentColumnId);
	return state.tasks.boards[boardIndex].columns[columnIndex].tasks;
};
export const selectCurrentTaskData = (state: RootState) => {
	const boardIndex = state.tasks.boards.findIndex((board) => board.id === state.currentBoardId);
	const columnIndex = state.tasks.boards[boardIndex].columns.findIndex((column) => column.id === state.currentColumnId);
	const taskIndex = state.tasks.boards[boardIndex].columns[columnIndex].tasks.findIndex((task) => task.id === state.currentTask.currentTaskId);
	return state.tasks.boards[boardIndex].columns[columnIndex].tasks[taskIndex];
};
export default tasksSlice.reducer;
