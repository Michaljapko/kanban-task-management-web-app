import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Boards, Board, Columns, TasksData } from '../../types/types';

const getBoardIndex = ({ boards }: Boards, boardId: string) =>
	boards.findIndex((board: Board) => board.id === boardId);

const getColumnIndex = (
	{ boards }: Boards,
	boardIndex: number,
	columnId: string
) =>
	boards[boardIndex].columns.findIndex(
		(column: Columns) => column.id === columnId
	);

const getTaskIndex = (
	{ boards }: Boards,
	boardIndex: number,
	columnIndex: number,
	taskId: string
) =>
	boards[boardIndex].columns[columnIndex].tasks.findIndex(
		(task: TasksData) => task.id === taskId
	);

export const TaskViewIdSlice = createSlice({
	name: 'TaskViewIdSlice',
	initialState: { currentTaskId: '' },
	reducers: {
		changeCurrentTask: (state, action: PayloadAction<string>) =>
			(state = { currentTaskId: action.payload }),
	},
});

export const { changeCurrentTask } = TaskViewIdSlice.actions;

export const selectCurrentTask = (state: RootState) =>
	state.currentTask.currentTaskId;

export const selectCurrentTaskName = (state: RootState) => {
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
	return state.taskAction.boards[boardIndex].columns[columnIndex].tasks[taskIndex]
		.title;
};
export default TaskViewIdSlice.reducer;
