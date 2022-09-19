import { TasksData } from '../../../../data/types/taskData.type';

export interface ColumnChangeType {
	columnTarget: string;
	task: TasksData;
	taskId: string;
}
