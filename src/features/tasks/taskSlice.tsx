import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
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
	const boardIndex = getBoardIndex(state.tasks, state.currentBoardId);
	const columnIndex = getColumnIndex(
		state.tasks,
		boardIndex,
		state.currentColumnId
	);
	const taskIndex = getTaskIndex(
		state.tasks,
		boardIndex,
		columnIndex,
		state.currentTask.currentTaskId
	);
	return state.tasks.boards[boardIndex].columns[columnIndex].tasks[taskIndex]
		.title;
};
export default TaskViewIdSlice.reducer;
