import { TasksData } from "../../../../data/types/taskData.type";


export interface ColumnChangeType {
	currentBoard: string;
	columnId: string;
	columnTarget: string;
	taskId: string;
	task: TasksData;
}
