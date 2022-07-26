import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import TaskView from '../TaskView';

import { StyledCard } from './TaskCards.style';

const TaskCards = () => {
	const columns = useAppSelector(selectTasksData);
	const [taskViewData, setTaskViewData] = useState();
	const [taskViewShow, setTaskViewShow] = useState(false);
	function showTask(task: any) {
		setTaskViewData(task);
		setTaskViewShow(true);
	}
	return (
		<>
			{taskViewShow && <TaskView task={taskViewData} />}
			{columns &&
				columns.map((column) => {
					return (
						<>
							<p key={column.id}>
								{column.name} ({column.tasks.length})
							</p>
							c sli]
							{column.tasks.map((task) => {
								return (
									<StyledCard onClick={() => showTask(task)} key={task.id}>
										<p>{task.title}</p>
										<p>
											{task.subtasks.reduce((taskDone, task) => {
												if (task.isCompleted) return ++taskDone;
												return taskDone;
											}, 0)}{' '}
											of {task.subtasks.length} subtask
										</p>
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
