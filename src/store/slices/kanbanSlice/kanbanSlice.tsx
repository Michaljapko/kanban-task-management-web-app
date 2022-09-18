import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
	editBoardReducer,
	deleteBoardReducer,
	addTaskReducer,
	addColumReducer,
	editTaskReducer,
	deleteTaskReducer,
	columnChangeTaskReducer,
	columnChangeTaskDragReducer,
	getTaskData,
	getCurrentTaskData,
	getTasksData,
} from './helpers';
import { data } from '../../../data/data';
import { DeleteTaskType } from './types/deleteTask.type';
import { AddTaskType } from './types/addTask.type';
import { EditTaskType } from './types/editTask.type';
import { AddColumnType } from './types/addColumn.type';
import { EditBoardType } from './types/editBoard.type';
import { ColumnChangeType } from './types/columnChange.type';
import { ColumnChangeDragType } from './types/columnChangeDrag.type';

import { Board } from '../../../data/types/board.type';
import { KanbanSlice } from './types/kanbanSlice';

const initialState: () => KanbanSlice = () => {
	if (localStorage.getItem('taskAction')) {
		return JSON.parse(localStorage.getItem('taskAction')!);
	}
	return { data: data, currentBoardId: '', currentColumnId: '' };
};

export const kanbanSlice = createSlice({
	name: 'kanbanSlice',
	initialState,
	reducers: {
		addBoard: ({ data }, { payload }: PayloadAction<Board>) => {
			data.boards = [...data.boards, payload];
		},
		editBoard: ({ data }, { payload }: PayloadAction<EditBoardType>) =>
			editBoardReducer(data, payload),

		deleteBoard: ({ data }, { payload }: PayloadAction<string>) =>
			deleteBoardReducer(data, payload),

		addTask: ({ data }, { payload }: PayloadAction<AddTaskType>) =>
			addTaskReducer(data, payload),

		addColumn: ({ data }, { payload }: PayloadAction<AddColumnType>) =>
			addColumReducer(data, payload),

		editTask: ({ data }, { payload }: PayloadAction<EditTaskType>) =>
			editTaskReducer(data, payload),

		deleteTask: ({ data }, { payload }: PayloadAction<DeleteTaskType>) =>
			deleteTaskReducer(data, payload),

		columnChangeTask: ({ data }, { payload }: PayloadAction<ColumnChangeType>) =>
			columnChangeTaskReducer(data, payload),

		columnChangeTaskDrag: (
			{ data },
			{ payload }: PayloadAction<ColumnChangeDragType>
		) => columnChangeTaskDragReducer(data, payload),

		changeBoard: (state, { payload }: PayloadAction<string>) => {
			state.currentBoardId = payload;
		},
		changeColumn: (state, action: PayloadAction<string>) => {
			state.currentColumnId = action.payload;
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
	changeBoard,
	changeColumn,
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

export default kanbanSlice.reducer;
