import { Boards } from '../../../../data/types/boards.type';

export interface KanbanSlice {
	data: Boards;
	currentBoardId: string;
	currentColumnId: string;
}
