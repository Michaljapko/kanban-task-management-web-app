import { TasksData } from './taskData.type';

export interface Column {
  id: string;
  name: string;
  tasks: TasksData[];
}
