import { useAppSelector } from '../../app/hooks';
import { selectTasks } from '../../features/tasks/tasksSlice';
import TaskView from '../TaskView';

import { StyledCard } from './TaskCards.style';

const TaskCards = () => {
	const columns = useAppSelector(selectTasks);
	return (
		<>
			{columns &&
				columns.map((column) => {
					return (
						<>
							<p key={column.id}>
								{column.name} ({column.tasks.length})
							</p>
							{column.tasks.map((task) => {
								return (
									<StyledCard key={task.id}>
										<p>{task.title}</p>
										<p>
											{task.subtasks.reduce((taskDone, task) => {

												if (task.isCompleted) return ++taskDone;
												return taskDone;
											}, 0)}{' '}
											of {task.subtasks.length} subtask
										</p>
										<TaskView task={task} />
									</StyledCard>
								);
							})}
						</>
					);
				})}
		</>
	);
};

export default TaskCards;
