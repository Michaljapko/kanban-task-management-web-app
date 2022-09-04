import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Boards, Board, TasksData, Column } from '../../types/types';
import { data } from '../../data/data';

const initialState: Boards = data;

const getBoardIndex = ({ boards }: any, boardId: string) =>
	boards.findIndex((board: any) => board.id === boardId);

const getColumnIndex = (
	{ boards }: any,
	boardIndex: string,
	columnId: string
) =>
	boards[boardIndex].columns.findIndex((column: any) => column.id === columnId);

const getTaskIndex = (
	{ boards }: any,
	boardIndex: string,
	columnIndex: string,
	taskId: string
) =>
	boards[boardIndex].columns[columnIndex].tasks.findIndex(
		(task: any) => task.id === taskId
	);

export const taskActionSlice = createSlice({
	name: 'taskAction',
	initialState,
	reducers: {
		addBoard: (state, { payload }: PayloadAction<Board>) => {
			state.boards = [...state.boards, payload];
		},

		editBoard: (
			state,
			{ payload }: PayloadAction<{ currentBoard: string; board: Board }>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			state.boards[boardIndex] = payload.board;
		},

		deleteBoard: (state, action: PayloadAction<string>) => {
			state.boards = state.boards.filter((board) => {
				return action.payload !== board.id;
			});
		},

		addTask: (
			state,
			{ payload }: PayloadAction<{ currentBoard: string; task: TasksData }>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			const columnIndex = getColumnIndex(
				state,
				boardIndex,
				payload.task.status
			);
			state.boards[boardIndex].columns[columnIndex].tasks = [
				...state.boards[boardIndex].columns[columnIndex].tasks,
				payload.task,
			];
		},

		addColumn: (
			state,
			{ payload }: PayloadAction<{ currentBoard: string; column: Column }>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			state.boards[boardIndex].columns = [
				...state.boards[boardIndex].columns,
				payload.column,
			];
		},

		editTask: (
			state,
			{
				payload,
			}: PayloadAction<{
				currentBoard: string;
				columnId: string;
				taskId: string;
				task: TasksData;
			}>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
			const taskIndex = getTaskIndex(
				state,
				boardIndex,
				columnIndex,
				payload.taskId
			);
			state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] =
				payload.task;
		},
		deleteTask: (
			state,
			{
				payload,
			}: PayloadAction<{
				currentBoard: string;
				columnId: string;
				taskId: string;
			}>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
			const newTasks = state.boards[boardIndex].columns[
				columnIndex
			].tasks.filter((task) => task.id !== payload.taskId);
			state.boards[boardIndex].columns[columnIndex].tasks = newTasks;
		},

		columnChangeTask: (
			state,
			{
				payload,
			}: PayloadAction<{
				currentBoard: string;
				columnId: string;
				columnTarget: string;
				taskId: string;
				task: TasksData;
			}>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
			const taskIndex = getTaskIndex(
				state,
				boardIndex,
				columnIndex,
				payload.taskId
			);
			const taskToChange = (state.boards[boardIndex].columns[columnIndex].tasks[
				taskIndex
			] = payload.task);
			state.boards[boardIndex].columns[columnIndex].tasks = state.boards[
				boardIndex
			].columns[columnIndex].tasks.filter((task) => {
				return payload.taskId !== task.id;
			});
			const columnIndexTarget = state.boards[boardIndex].columns.findIndex(
				(column) => column.id === payload.columnTarget
			);
			state.boards[boardIndex].columns[columnIndexTarget].tasks = [
				...state.boards[boardIndex].columns[columnIndexTarget].tasks,
				taskToChange,
			];
		},
		columnChangeTaskDrag: (
			state,
			{
				payload,
			}: PayloadAction<{
				currentBoard: string;
				columnId: string;
				columnTarget: string;
				taskId: string;
				index: number;
			}>
		) => {
			const boardIndex = getBoardIndex(state, payload.currentBoard);
			const columnIndex = getColumnIndex(state, boardIndex, payload.columnId);
			const taskIndex = getTaskIndex(
				state,
				boardIndex,
				columnIndex,
				payload.taskId
			);
			const taskToChange =
				state.boards[boardIndex].columns[columnIndex].tasks[taskIndex];

			state.boards[boardIndex].columns[columnIndex].tasks = state.boards[
				boardIndex
			].columns[columnIndex].tasks.filter((task) => {
				return payload.taskId !== task.id;
			});
			const columnIndexTarget = state.boards[boardIndex].columns.findIndex(
				(column) => column.id === payload.columnTarget
			);
			const newTasks =
				state.boards[boardIndex].columns[columnIndexTarget].tasks;
			newTasks.splice(payload.index, 0, taskToChange);
			state.boards[boardIndex].columns[columnIndexTarget].tasks = newTasks;
		},
	},
});

export const {
	addTask,
	addBoard,
	addColumn,
	deleteBoard,
	deleteTask,
	editTask,
	editBoard,
	columnChangeTask,
	columnChangeTaskDrag,
} = taskActionSlice.actions;

export const selectTasksData = (state: RootState) => {
	const board = state.taskAction.boards.find(
		(board) => board.id === state.currentBoardId
	);
	return board?.columns;
};

export const selectTaskData = (state: RootState) => {
	const boardIndex = getBoardIndex(state.taskAction, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.taskAction,
		boardIndex,
		state.currentColumnId
	);
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks;
};

export const selectCurrentTaskData = (state: RootState) => {
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
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks[taskIndex];
};

export default taskActionSlice.reducer;
