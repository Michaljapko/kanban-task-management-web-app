import { useAppSelector } from '../../app/hooks';
import { selectTasks } from '../../features/tasks/tasksSlice';

import { StyledCard } from './TaskCards.style';

const TaskCards = () => {
	const tasks = useAppSelector(selectTasks);

	return (
		<>
			{tasks.map((task) => {
				return (
					<StyledCard key={task.id}>
						<p>{task.title}</p>
						<p>0 of {task.subtask.length} subtasks</p>
					</StyledCard>
				);
			})}
		</>
	);
};

export default TaskCards;
