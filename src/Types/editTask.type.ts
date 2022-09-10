import { TasksData } from "./taskData.type";

export interface EditTaskType {
	currentBoard: string;
	columnId: string;
	taskId: string;
	task: TasksData;
}
