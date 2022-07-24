import { useAppSelector } from '../../app/hooks';
import { selectTasks } from '../../features/tasks/tasksSlice';

import { StyledCard } from './TaskCards.style';

const TaskCards = () => {
	const columns = useAppSelector(selectTasks);

	return (
		<>
			{columns &&
				columns.map((column) => {
					return (
						<>
							<p>
								{column.name} ({column.tasks.length})
							</p>
							{column.tasks.map((task) => {
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
