import { ActionMeta } from 'react-select';

export interface Subtask {
	id: string;
	title: string;
	isCompleted: boolean;
}

export interface InputTypes {
	name?: string;
	placeholder?: string;
	as?: 'textarea';
	type?: string;
	error?: string;
}
export interface CheckBoxTypes {
	name?: string;
	onChange?: () => void;
	defaultChecked?: boolean;
}

export type ButtonVariants =
	| 'header'
	| 'headerMobile'
	| 'sidebar'
	| 'sidebarBold'
	| 'sidebarCurrent'
	| 'headerOff'
	| 'headerOffMobile'
	| 'secondary'
	| 'delete'
	| 'buttonBig';

export type PopUpVariants = 'sidebar' | 'delete';

export interface PopUpTypes {
	children?: JSX.Element | JSX.Element[] | string;
	title?: string;
	layoutDispatch: () => void;
	variant?: PopUpVariants;
	headingElement?: JSX.Element | JSX.Element[] | string;
}

export type SelectInputOption = { value: string; label: string };

export interface SelectInputTypes {
	name?: string;
	options: SelectInputOption[];
	defaultValue?: SelectInputOption;
	classNamePrefix?: string;
	onChange: (
		option: SelectInputOption | null,
		actionMeta: ActionMeta<SelectInputOption>
	) => void;
}

export interface ButtonTypes {
	children?: JSX.Element | JSX.Element[] | string;
	icon?: 'plus' | 'board' | 'hide';
	variant?: ButtonVariants;
	onClick?: () => void;
	type?: 'button' | 'reset' | 'submit';
	width?: 'full';
}


export interface ButtonStyled {
	variant?: ButtonTypes;
}

export interface Board {
	id: string;
	name: string;
	columns: Columns[];
}
export interface Columns {
	id: string;
	name: string;
	tasks: TasksData[];
}

export interface TasksData {
	id: string;
	title: string;
	description: string;
	subtasks: Subtask[];
	status: string;
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

export interface ColumnInputValues {
	boardName: string;
	columns: { name: string }[];
}

export interface TaskInputValues {
	title: string;
	description: string;
	subtasks: { title: string; isCompleted: boolean }[];
	status: string;
}

export interface BoardInputValues {
	boardName: string;
	columns: { id: string; name: string }[];
}
