import { TasksData } from "../../../../data/types/taskData.type";

export interface EditTaskType {
	currentBoard: string;
	columnId: string;
	taskId: string;
	task: TasksData;
}
