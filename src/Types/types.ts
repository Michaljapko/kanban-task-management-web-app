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
	title: string;
	describe: string;
	subtask: Subtask[];
	status: 'doing' | 'todo';
}

export interface ColumnAddingObject {
	columnName: string;
	currentBoard: string;
}

export interface ButtonTypes {
	children: string;
	icon?: 'plus';
	onClick?: any;
}
