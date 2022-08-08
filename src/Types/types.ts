export interface Subtask {
	id: string;
	title: string;
	isCompleted: boolean;
}

export interface ButtonTypes {
	children?: string;
	icon?: 'plus' | 'board';
	variant?: 'header' | 'sidebar' | 'sidebarBold' | 'sidebarCurrent' | 'header-off' | 'secondary';
	onClick?: any;
	type?: 'button' | 'reset' | 'submit' | undefined;
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

export interface Board {
	id: string;
	name: string;
	columns: {
		id: string;
		name: string;
		tasks: TasksData[];
	}[];
}

export interface Column {
	id: string;
	name: string;
	tasks: [];
}
export interface TasksData {
	id: string;
	title: string;
	description: string;
	subtasks: Subtask[];
	status: string;
}
