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
	selectCurrentTaskData,
} from '../../features/tasks/taskActionSlice';
import {
	selectIsDropdownTaskShow,
	setIsDropdownTaskShow,
	setIsTaskShow,
} from '../../features/layout/layoutSlice';
import {
	changeColumn,
	selectCurrentColumn,
} from '../../features/tasks/columnSlice';
import { STATE, subtaskInfo } from '../../data/textEN';
import { getCompletedTask } from '../../helpers/getCompletedTasks';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { Subtask } from '../../types/types';
import PopUp from '../PopUp';
import DropDown from '../DropDown';
import CheckBox from '../CheckBox/ChcekBox';
import SelectInput from '../SelectInput';
import Ellipsis from '../Ellipsis';

const TaskView = () => {
	const [taskDone, setTaskDone] = useState(0);
	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const taskColumn = useAppSelector(selectTasksData);
	const isDropdownTaskShow = useAppSelector(selectIsDropdownTaskShow);
	const task = useAppSelector(selectCurrentTaskData);

	const ellipsisButton = (
		<>
			<Ellipsis
				onClick={() => {
					dispatch(setIsDropdownTaskShow());
				}}
			/>
			{isDropdownTaskShow && <DropDown variant='task' />}
		</>
	);
	const getUpdateTask = (subtask: Subtask) => ({
		...task,
		subtasks: task.subtasks.map((subtaskInSet: Subtask) => {
			let isCompleted = subtaskInSet.isCompleted;
			if (subtaskInSet.id === subtask.id) isCompleted = !isCompleted;
			return {
				id: subtaskInSet.id,
				title: subtaskInSet.title,
				isCompleted: isCompleted,
			};
		}),
	});

	useEffect(() => {
		setTaskDone(getCompletedTask(task.subtasks));
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
					{subtaskInfo(taskDone, task.subtasks.length)}
				</StyledParagraph>

				{task.subtasks.map((subtask, index) => (
					<StyledSubtaskBox key={subtask.id}>
						<CheckBox
							name='subscribe'
							onChange={() => {
								dispatch(
									editTask({
										columnId: currentColumn,
										taskId: task.id,
										currentBoard: currentBoard,
										task: getUpdateTask(subtask),
									})
								);
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
				<StyledParagraph>{STATE}</StyledParagraph>
				<SelectInput
					onChange={(e) => {
						const taskUpdated = { ...task };
						dispatch(changeColumn(e!.value));
						dispatch(
							columnChangeTask({
								columnId: currentColumn,
								columnTarget: e!.value,
								taskId: task.id,
								currentBoard: currentBoard,
								task: taskUpdated,
							})
						);
					}}
					options={taskColumn!.map((column) => ({
						value: column.id,
						label: column.name,
					}))}
				/>
			</StyledBoxSection>
		</PopUp>
	);
};

export default TaskView;
