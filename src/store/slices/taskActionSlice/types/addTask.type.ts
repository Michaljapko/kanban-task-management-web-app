import { TasksData } from '../../../../data/types/taskData.type';

export interface AddTaskType {
	currentBoard: string;
	task: TasksData;
}
