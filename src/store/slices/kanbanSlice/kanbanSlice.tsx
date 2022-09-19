import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
	editBoardReducer,
	deleteBoardReducer,
	addTaskReducer,
	editTaskReducer,
	deleteTaskReducer,
	columnChangeTaskReducer,
	columnChangeTaskDragReducer,
	getTaskData,
	getCurrentTaskData,
	getTasksData,
	getCurrentTaskName,
} from './helpers';
import { data } from '../../../data/data';
import { ColumnChangeType } from './types/columnChange.type';
import { ColumnChangeDragType } from './types/columnChangeDrag.type';
import { Board } from '../../../data/types/board.type';
import { KanbanSlice } from './types/kanbanSlice';
import { TasksData } from 'data/types/taskData.type';

const initialState: () => KanbanSlice = () => {
	// if (localStorage.getItem('taskAction')) {
	// 	return JSON.parse(localStorage.getItem('taskAction')!);
	// }
	return {
		data: data,
		currentBoardId: '',
		currentColumnId: '',
		currentTaskId: '',
	};
};

export const kanbanSlice = createSlice({
	name: 'kanbanSlice',
	initialState,
	reducers: {
		addBoard: ({ data }, { payload }: PayloadAction<Board>) => {
			data.boards = [...data.boards, payload];
		},
		editBoard: (state, { payload }: PayloadAction<{ board: Board }>) =>
			editBoardReducer(state, payload),

		deleteBoard: (state) => deleteBoardReducer(state),

		addTask: (state, { payload }: PayloadAction<{ task: TasksData }>) =>
			addTaskReducer(state, payload),

		editTask: (state, { payload }: PayloadAction<{ task: TasksData }>) =>
			editTaskReducer(state, payload),

		deleteTask: (state) => deleteTaskReducer(state),

		columnChangeTask: (state, { payload }: PayloadAction<ColumnChangeType>) =>
			columnChangeTaskReducer(state, payload),

		columnChangeTaskDrag: (
			state,
			{ payload }: PayloadAction<ColumnChangeDragType>
		) => columnChangeTaskDragReducer(state, payload),

		changeBoard: (state, { payload }: PayloadAction<string>) => {
			state.currentBoardId = payload;
		},
		changeColumn: (state, { payload }: PayloadAction<string>) => {
			state.currentColumnId = payload;
		},
		changeTask: (state, { payload }: PayloadAction<string>) => {
			state.currentTaskId = payload;
		},
	},
});

export const {
	addTask,
	addBoard,
	deleteBoard,
	deleteTask,
	editTask,
	editBoard,
	columnChangeTask,
	columnChangeTaskDrag,
	changeBoard,
	changeColumn,
	changeTask,
} = kanbanSlice.actions;

export const selectTasksData = (state: RootState) => getTasksData(state);

export const selectTaskData = (state: RootState) => getTaskData(state);

export const selectCurrentTaskData = (state: RootState) =>
	getCurrentTaskData(state);

export const selectCurrentBoard = (state: RootState) =>
	state.kanbanSlice.currentBoardId;

export const selectCurrentBoardIndex = (state: RootState) =>
	state.kanbanSlice.data.boards.findIndex(
		(board) => board.id === state.kanbanSlice.currentBoardId
	);

export const selectCurrentBoardData = ({ kanbanSlice }: RootState) => {
	const currentBoard = kanbanSlice.data.boards.find(
		(board) => board.id === kanbanSlice.currentBoardId
	);
	return currentBoard!;
};

export const selectCurrentBoardName = ({ kanbanSlice }: RootState) => {
	const currentBoard = kanbanSlice.data.boards.find(
		(board) => board.id === kanbanSlice.currentBoardId
	);
	return currentBoard!.name;
};

export const selectBoards = ({ kanbanSlice }: RootState) =>
	kanbanSlice.data.boards.map((board) => board);

export const selectCurrentColumn = ({ kanbanSlice }: RootState) =>
	kanbanSlice.currentColumnId;

export const selectCurrentTask = (state: RootState) =>
	state.kanbanSlice.currentTaskId;

export const selectCurrentTaskName = (state: RootState) =>
	getCurrentTaskName(state);

export default kanbanSlice.reducer;
