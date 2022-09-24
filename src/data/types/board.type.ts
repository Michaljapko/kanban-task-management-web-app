import { Column } from './column.type';

export interface Board {
  id: string;
  name: string;
  columns: Column[];
}
