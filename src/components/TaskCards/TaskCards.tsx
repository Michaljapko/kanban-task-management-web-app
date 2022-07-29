import { useState } from 'react';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import TaskView from '../TaskView';
import { selectIsTaskShow, setIsTaskShow } from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { StyledCard } from './TaskCards.style';

const TaskCards = () => {
	const dispatch = useAppDispatch();
	const columns = useAppSelector(selectTasksData);
	const isTaskShow = useAppSelector(selectIsTaskShow);
	const [taskViewData, setTaskViewData] = useState();

	function showTask(task: any) {
		setTaskViewData(task);
		dispatch(setIsTaskShow());
	}
	return (
		<>
			{isTaskShow && <TaskView task={taskViewData} />}
			{columns &&
				columns.map((column) => {
					console.log(column);
					return (
						<div>
							<p key={column.id}>
								{column.name} ({column.tasks.length})
							</p>

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
						</div>
					);
				})}
		</>
	);
};

export default TaskCards;
