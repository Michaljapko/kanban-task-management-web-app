export interface tasksData {
	id: string;
	title: string;
	describe: string;
	subtask: string[];
	status: 'doing' | 'todo';
}
