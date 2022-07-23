interface Subtask {
	title: string;
	isCompleted: boolean;
}

export interface Boards {
	boards: {
		name: string;
		columns: {
			name: string;
			tasks: {
				title: string;
				description: string;
				status: string;
				subtasks: {
					title: string;
					isCompleted: boolean;
				}[];
			}[];
		}[];
	}[];
}

export interface TasksData {
	id: string;
	title: string;
	describe: string;
	subtask: Subtask[];
	status: 'doing' | 'todo';
}
