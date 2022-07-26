export interface Subtask {
	title: string;
	isCompleted: boolean;
}

export interface ButtonTypes {
	children?: string;
	icon?: 'plus';
	variant?: 'header';
	onClick?: any;
}

export interface Boards {
	boards: {
		id: string;
		name: string;
		columns: {
			id: string;
			name: string;
			tasks: {
				id: string;
				title: string;
				description: string;
				status: string;
				subtasks: {
					id: string;
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
	description: string;
	subtasks: Subtask[];
	status: string;
}

export interface ColumnAddingObject {
	columnName: string;
	currentBoard: string;
}
