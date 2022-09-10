import { Boards, Board, Column, TasksData } from '../types';

export const getBoardIndex = ({ boards }: Boards, boardId: string) =>
	boards.findIndex((board: Board) => board.id === boardId);

export const getColumnIndex = (
	{ boards }: Boards,
	boardIndex: number,
	columnId: string
) =>
	boards[boardIndex].columns.findIndex(
		(column: Column) => column.id === columnId
	);

export const getTaskIndex = (
	{ boards }: Boards,
	boardIndex: number,
	columnIndex: number,
	taskId: string
) =>
	boards[boardIndex].columns[columnIndex].tasks.findIndex(
		(task: TasksData) => task.id === taskId
	);
