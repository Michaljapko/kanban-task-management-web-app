import { TasksData } from '../../../../data/types/taskData.type';

export interface ColumnChangeType {
	columnId: string;
	columnTarget: string;
	task: TasksData;
	taskId: string;
}
