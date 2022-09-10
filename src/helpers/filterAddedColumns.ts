import { Column } from '../types';

export const filterAddedColumns = (
	addedColumns: {
		id: string;
		name: string;
	}[],
	columns: Column[]
) =>
	addedColumns.map((column) => {
		const existingColumn = columns.find(
			(currentColumn) => currentColumn.id === column.id
		);
		if (existingColumn) return { ...existingColumn, name: column.name };
		return { name: column.name, id: column.id, tasks: [] };
	});
