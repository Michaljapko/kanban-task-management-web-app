export interface TaskInputValues {
	title: string;
	description: string;
	subtasks: { title: string; isCompleted: boolean }[];
	status: string;
}
