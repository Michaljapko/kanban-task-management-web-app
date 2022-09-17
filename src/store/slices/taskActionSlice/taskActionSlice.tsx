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
import { Boards } from '../../../data/types/boards.type';
import { Board } from '../../../data/types/board.type';

const initialState: () => Boards = () => {
	if (localStorage.getItem('taskAction')) {
		return JSON.parse(localStorage.getItem('taskAction')!);
	}
	return data;
};

export const taskActionSlice = createSlice({
	name: 'taskAction',
	initialState,
	reducers: {
		addBoard: (state, { payload }: PayloadAction<Board>) => {
			state.boards = [...state.boards, payload];
		},

		editBoard: (state, { payload }: PayloadAction<EditBoardType>) =>
			editBoardReducer(state, payload),

		deleteBoard: (state, { payload }: PayloadAction<string>) =>
			deleteBoardReducer(state, payload),

		addTask: (state, { payload }: PayloadAction<AddTaskType>) =>
			addTaskReducer(state, payload),

		addColumn: (state, { payload }: PayloadAction<AddColumnType>) =>
			addColumReducer(state, payload),

		editTask: (state, { payload }: PayloadAction<EditTaskType>) =>
			editTaskReducer(state, payload),

		deleteTask: (state, { payload }: PayloadAction<DeleteTaskType>) =>
			deleteTaskReducer(state, payload),

		columnChangeTask: (state, { payload }: PayloadAction<ColumnChangeType>) =>
			columnChangeTaskReducer(state, payload),

		columnChangeTaskDrag: (
			state,
			{ payload }: PayloadAction<ColumnChangeDragType>
		) => columnChangeTaskDragReducer(state, payload),
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

export const selectTasksData = (state: RootState) => getTasksData(state);

export const selectTaskData = (state: RootState) => getTaskData(state);

export const selectCurrentTaskData = (state: RootState) =>
	getCurrentTaskData(state);

export default taskActionSlice.reducer;
