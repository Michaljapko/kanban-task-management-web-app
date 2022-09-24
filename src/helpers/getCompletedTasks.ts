import { Subtask } from 'data/types/subtask.type';

export const getCompletedTask = (subtasks: Subtask[]) =>
  subtasks.reduce((taskDone: number, task: Subtask) => {
    if (task.isCompleted) {
      return ++taskDone;
    }
    return taskDone;
  }, 0);
