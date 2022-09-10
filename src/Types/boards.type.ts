import { Column } from '../types';
export interface Boards {
	boards: {
		id: string;
		name: string;
		columns: Column[];
	}[];
}
