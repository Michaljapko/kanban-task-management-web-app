import { Column } from "./column.type";

export interface Boards {
	boards: {
		id: string;
		name: string;
		columns: Column[];
	}[];
}
