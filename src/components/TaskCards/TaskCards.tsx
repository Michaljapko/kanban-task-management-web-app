import { useAppSelector } from '../../app/hooks';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { selectTasks } from '../../features/tasks/tasksSlice';

import { StyledCard } from './TaskCards.style';

const TaskCards = () => {
	const tasks = useAppSelector(selectTasks);

	return (
		<>
			{tasks &&
				tasks.map((task) => {
					return (
						<>
							<p>{task.name}</p>
							{task.tasks.map((task) => {
								return (
									<StyledCard>
										<p>{task.title}</p>
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
