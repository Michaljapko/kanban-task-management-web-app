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

import TaskView from '../TaskView';
import { changeColumn } from '../../features/tasks/columnSlice';
import { changeCurrentTask } from '../../features/tasks/taskSlice';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import { useState } from 'react';

const TaskCards = () => {
	const dispatch = useAppDispatch();
	const columns = useAppSelector(selectTasksData);
	const isTaskShow = useAppSelector(selectIsTaskShow);
	const [taskViewData, setTaskViewData] = useState();
	// const [currentColumnId, setCurrentColumnId] = useState();

	function showTask(task: any, ColumnId: any) {
		dispatch(changeColumn(ColumnId));
		dispatch(changeCurrentTask(task.id));
		setTaskViewData(task);
		dispatch(setIsTaskShow());
	}
	return (
		<>
			{isTaskShow && <TaskView taskData={taskViewData} />}
			{columns &&
				columns.map((column) => {
					return (
						<div key={column.id}>
							<StyledHeading>
								{column.name} ({column.tasks.length})
							</StyledHeading>

							{column.tasks.map((task) => {
								return (
									<StyledCard
										onClick={() => showTask(task, column.id)}
										key={task.id}
									>
										<StyledTitle>{task.title}</StyledTitle>
										<StyledParagraph>
											{task.subtasks.reduce((taskDone, task) => {
												if (task.isCompleted) return ++taskDone;
												return taskDone;
											}, 0)}{' '}
											of {task.subtasks.length} substasks
										</StyledParagraph>
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
