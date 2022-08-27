import {
	StyledCard,
	StyledHeading,
	StyledParagraph,
	StyledTitle,
} from './TaskCards.style';
import {
	selectIsTaskShow,
	setIsTaskShow,
} from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeCurrentTask } from '../../features/tasks/taskSlice';
import { changeColumn } from '../../features/tasks/columnSlice';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import { TasksData } from '../../types/types';
import { getCompletedTask } from '../../helpers/getCompletedTasks';
import { subtaskInfoCard } from '../../data/textEN';
import TaskView from '../TaskView';

const TaskCards = () => {
	const dispatch = useAppDispatch();
	const columns = useAppSelector(selectTasksData);
	const isTaskShow = useAppSelector(selectIsTaskShow);

	function showTask(task: TasksData, ColumnId: string) {
		dispatch(changeColumn(ColumnId));
		dispatch(changeCurrentTask(task.id));
		dispatch(setIsTaskShow());
	}
	return (
		<>
			{isTaskShow && <TaskView />}
			{columns &&
				columns.map((column) => {
					return (
						<div key={column.id}>
							<StyledHeading>
								{column.name} ({column.tasks.length})
							</StyledHeading>

							{column.tasks.map((task) => (
								<StyledCard
									onClick={() => showTask(task, column.id)}
									key={task.id}
								>
									<StyledTitle>{task.title}</StyledTitle>
									<StyledParagraph>
										{subtaskInfoCard(
											getCompletedTask(task.subtasks),
											task.subtasks.length
										)}
									</StyledParagraph>
								</StyledCard>
							))}
						</div>
					);
				})}
		</>
	);
};

export default TaskCards;
