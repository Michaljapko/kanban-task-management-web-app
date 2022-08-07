import { StyledBoxSection, StyledDescription, StyledParagraph, StyledSubtaskBox, StyledTitle } from './TaskView.styled';
import { selectTasksData, columnChangeTask, editTask } from '../../features/tasks/tasksSlice';
import { setIsTaskEditShow, setIsTaskShow } from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';

import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { selectCurrentColumn } from '../../features/tasks/columnSlice';
import PopUp from '../PopUp';

const TaskView = ({ taskData }: any) => {
	const [task, setTask] = useState(taskData);
	const [taskDone, setTaskDone] = useState(0);
	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const taskColumn = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);

	function getTaskDone() {
		setTaskDone(
			task.subtasks.reduce((taskDone: number, task: any) => {
				if (task.isCompleted) return ++taskDone;
				return taskDone;
			}, 0)
		);
	}

	useEffect(() => {
		getTaskDone();
	}, [task]);

	return (
		<PopUp
			layoutDispatch={() => {
				dispatch(setIsTaskShow());
			}}
		>
			<StyledBoxSection>
				<StyledTitle>{task.title}</StyledTitle>
				<img
					src={ellipsis}
					alt='ellipsis'
					onClick={() => {
						dispatch(setIsTaskEditShow());
					}}
				/>
			</StyledBoxSection>
			<StyledBoxSection>
				<StyledDescription>{task.description}</StyledDescription>
			</StyledBoxSection>

			<StyledBoxSection>
				<StyledParagraph>
					Subtask ({taskDone} of {task.subtasks.length})
				</StyledParagraph>

				{task.subtasks.map((subtask: any) => (
					<StyledSubtaskBox>
						<input
							key={subtask.id}
							type='checkbox'
							id='subscribeNews'
							name='subscribe'
							onChange={() => {
								const taskUpdated = {
									...task,
									subtasks: task.subtasks.map((subtaskInSet: any) => {
										let isCompleted = subtaskInSet.isCompleted;
										if (subtaskInSet.id === subtask.id) isCompleted = !isCompleted;
										return { id: subtaskInSet.id, title: subtaskInSet.title, isCompleted: isCompleted };
									}),
								};
								setTask(taskUpdated);
								dispatch(
									editTask({
										columnId: currentColumn,
										taskId: task.id,
										currentBoard: currentBoard,
										task: taskUpdated,
									})
								);
								getTaskDone();
							}}
							defaultChecked={subtask.isCompleted}
						/>
						<p>{subtask.title}</p>
					</StyledSubtaskBox>
				))}
			</StyledBoxSection>
			<StyledBoxSection>
				<StyledParagraph>Current state:</StyledParagraph>
				<select
					onChange={(e) => {
						const taskUpdated = {
							...task,
							status: e.target.value,
						};
						dispatch(
							columnChangeTask({
								columnId: currentColumn,
								columnTarget: e.target.value,
								taskId: task.id,
								currentBoard: currentBoard,
								task: taskUpdated,
							})
						);
					}}
				>
					{taskColumn?.map((column) => {
						if (currentColumn === column.id) {
							return (
								<option key={column.id} value={column.name} selected>
									{column.name}
								</option>
							);
						}
						return <option value={column.id}>{column.name}</option>;
					})}
				</select>
			</StyledBoxSection>
		</PopUp>
	);
};

export default TaskView;
