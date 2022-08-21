export interface Subtask {
	id: string;
	title: string;
	isCompleted: boolean;
}

export interface InputTypes {
	name: string;
	placeholder: string;
	as?: 'textarea';
	type?: string;
	error?: string;
}

export type Variants =
	| 'header'
	| 'sidebar'
	| 'sidebarBold'
	| 'sidebarCurrent'
	| 'headerOff'
	| 'secondary'
	| 'delete'
	| 'landingPage';

export interface ButtonTypes {
	children?: JSX.Element | JSX.Element[] | string;
	icon?: 'plus' | 'board';
	variant?: Variants;
	onClick?: any;
	type?: 'button' | 'reset' | 'submit';
}

export interface ThemeType {
	mainColor: string;
	themeColor: string;
	buttonSecondaryHover: string;
	backgroundBack: string;
	textGrey: string;
	colorError: string;
	buttonText: string;
	buttonPrimary: string;
	buttonPrimaryHover: string;
	buttonDestructive: string;
	buttonDestructiveHover: string;
	backgroundMain: string;
	backgroundBody: string;
	buttonSecondary: string;
	textHeading: {
		xlarge: string;
		large: string;
		medium: string;
		small: string;
	};
	text: {
		large: string;
		medium: string;
	};
}

export interface ButtonStyled {
	variant?: ButtonTypes;
	theme: ThemeType;
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

export interface ColumnInputValues {
	name: string;
	columns: { name: string }[];
}

export interface TaskInputValues {
	title: string;
	description: string;
	subtasks: { title: string; isCompleted: boolean }[];
	status: string;
}

export interface BoardInputValues {
	name: string;
	columns: { id: string; name: string }[];
}
