import { Subtask } from './subtask.type';

export interface TasksData {
  id: string;
  title: string;
  description: string;
  subtasks: Subtask[];
  status: string;
}
