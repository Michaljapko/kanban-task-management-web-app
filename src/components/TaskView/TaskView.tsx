import {
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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { STATE, subtaskInfo } from '../../data/textEN';
import { getCompletedTask } from '../../helpers/getCompletedTasks';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { changeCurrentTask } from '../../features/tasks/taskSlice';
import { useEffect, useState } from 'react';
import { StyledBoxSection } from '../../theme/MenuBox.styled';
import { getUpdateTask } from '../../helpers/getUpdateTask';
import ScrollWrapper from '../UI/ScrollWrapper';
import SelectInput from '../UI/SelectInput';
import Ellipsis from '../UI/Ellipsis';
import CheckBox from '../UI/CheckBox';
import DropDown from '../UI/DropDown';
import PopUp from '../UI/PopUp';
import { SelectInputOption, Subtask } from '../../types/types';

const TaskView = () => {
	const [taskDone, setTaskDone] = useState(0);
	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const taskColumn = useAppSelector(selectTasksData);
	const isDropdownTaskShow = useAppSelector(selectIsDropdownTaskShow);
	const task = useAppSelector(selectCurrentTaskData);

	const taskColumsData = taskColumn!.map((column) => ({
		value: column.id,
		label: column.name,
	}));

	const taskCheckHandler = (subtask: Subtask) => {
		dispatch(
			editTask({
				columnId: currentColumn,
				taskId: task.id,
				currentBoard: currentBoard,
				task: getUpdateTask(subtask, task),
			})
		);
	};

	const columnChangeHandler = (event: SelectInputOption) => {
		const taskUpdated = { ...task };
		dispatch(changeColumn(event!.value));
		dispatch(
			columnChangeTask({
				columnId: currentColumn,
				columnTarget: event!.value,
				taskId: task.id,
				currentBoard: currentBoard,
				task: taskUpdated,
			})
		);
	};

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

	useEffect(() => {
		setTaskDone(getCompletedTask(task.subtasks));
	}, [task, task.subtasks]);

	return (
		<PopUp
			title={task.title}
			layoutDispatch={() => {
				dispatch(setIsTaskShow());
				dispatch(changeCurrentTask(''));
			}}
			headingElement={ellipsisButton}
		>
			<StyledBoxSection>
				<StyledDescription>{task.description}</StyledDescription>
			</StyledBoxSection>

			<StyledBoxSection>
				<StyledParagraph>{subtaskInfo(taskDone, task.subtasks.length)}</StyledParagraph>
				<ScrollWrapper>
					{task.subtasks.map((subtask) => (
						<StyledSubtaskBox key={subtask.id} onClick={() => taskCheckHandler(subtask)}>
							<CheckBox name='subscribe' defaultChecked={subtask.isCompleted} />
							<StyledSubtaskInfo complete={subtask.isCompleted}>
								{subtask.title}
							</StyledSubtaskInfo>
						</StyledSubtaskBox>
					))}
				</ScrollWrapper>
			</StyledBoxSection>

			<StyledBoxSection>
				<StyledParagraph>{STATE}</StyledParagraph>
				<SelectInput
					onChange={(event) => columnChangeHandler(event!)}
					options={taskColumsData}
					defaultValue={taskColumsData.find((columns) => columns.value === currentColumn)}
				/>
			</StyledBoxSection>
		</PopUp>
	);
};

export default TaskView;
