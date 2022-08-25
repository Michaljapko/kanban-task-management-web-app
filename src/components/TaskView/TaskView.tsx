import {
	StyledBoxSection,
	StyledDescription,
	StyledParagraph,
	StyledSubtaskBox,
	StyledSubtaskInfo,
} from './TaskView.styled';
import {
	selectTasksData,
	columnChangeTask,
	editTask,
} from '../../features/tasks/tasksSlice';
import {
	selectIsDropDownShow,
	setIsDropDownShow,
	setIsTaskShow,
} from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { selectCurrentColumn } from '../../features/tasks/columnSlice';
import PopUp from '../PopUp';
import DropDown from '../DropDown';
import CheckBox from '../CheckBox/ChcekBox';
import SelectInput from '../SelectInput';

const TaskView = ({ taskData }: any) => {
	const [task, setTask] = useState(taskData);
	const [taskDone, setTaskDone] = useState(0);
	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const taskColumn = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const isDropDownShow = useAppSelector(selectIsDropDownShow);

	function getTaskDone() {
		setTaskDone(
			task.subtasks.reduce((taskDone: number, task: any) => {
				if (task.isCompleted) return ++taskDone;
				return taskDone;
			}, 0)
		);
	}
	const ellipsisButton = (
		<>
			<img
				src={ellipsis}
				alt='ellipsis'
				onClick={() => {
					dispatch(setIsDropDownShow());
				}}
			/>
			{isDropDownShow && <DropDown variant='task' />}
		</>
	);
	useEffect(() => {
		getTaskDone();
	}, [task]);

	return (
		<PopUp
			title={task.title}
			layoutDispatch={() => {
				dispatch(setIsTaskShow());
			}}
			headingElement={ellipsisButton}
		>
			<StyledBoxSection>
				<StyledDescription>{task.description}</StyledDescription>
			</StyledBoxSection>

			<StyledBoxSection>
				<StyledParagraph>
					Subtask ({taskDone} of {task.subtasks.length})
				</StyledParagraph>

				{task.subtasks.map((subtask: any) => (
					<StyledSubtaskBox>
						<CheckBox
							key={subtask.id}
							name='subscribe'
							onChange={() => {
								const taskUpdated = {
									...task,
									subtasks: task.subtasks.map((subtaskInSet: any) => {
										let isCompleted = subtaskInSet.isCompleted;
										if (subtaskInSet.id === subtask.id)
											isCompleted = !isCompleted;
										return {
											id: subtaskInSet.id,
											title: subtaskInSet.title,
											isCompleted: isCompleted,
										};
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
						<StyledSubtaskInfo complete={subtask.isCompleted}>
							{subtask.title}
						</StyledSubtaskInfo>
					</StyledSubtaskBox>
				))}
			</StyledBoxSection>
			<StyledBoxSection>
				<StyledParagraph>Current state:</StyledParagraph>
				<SelectInput
					onChange={(e) => {
						console.log(e);
						const taskUpdated = {
							...task,
							status: e.value,
						};

						dispatch(
							columnChangeTask({
								columnId: currentColumn,
								columnTarget: e.value,
								taskId: task.id,
								currentBoard: currentBoard,
								task: taskUpdated,
							})
						);
					}}
			
					options={taskColumn.map((column) => ({
						value: column.id,
						label: column.name,
					}))}
				/>
			</StyledBoxSection>
		</PopUp>
	);
};

export default TaskView;
