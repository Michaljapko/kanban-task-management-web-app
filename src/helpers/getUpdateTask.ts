import { Subtask, TasksData } from '../types/types';

export const getUpdateTask = (subtask: Subtask, task: TasksData) => ({
	...task,
	subtasks: task.subtasks.map((subtaskInSet: Subtask) => {
		let isCompleted = subtaskInSet.isCompleted;
		if (subtaskInSet.id === subtask.id) isCompleted = !isCompleted;
		return {
			id: subtaskInSet.id,
			title: subtaskInSet.title,
			isCompleted: isCompleted,
		};
	}),
});
