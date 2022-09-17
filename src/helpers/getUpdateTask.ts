import { Subtask } from 'data/types/subtask.type';
import { TasksData } from 'data/types/taskData.type';

export const getUpdateTask = (subtask: Subtask, task: TasksData) => ({
	...task,
	subtasks: task.subtasks.map((subtaskInSet: Subtask) => {
		return {
			id: subtaskInSet.id,
			title: subtaskInSet.title,
			isCompleted:
				subtaskInSet.id === subtask.id
					? !subtaskInSet.isCompleted
					: subtaskInSet.isCompleted,
		};
	}),
});
