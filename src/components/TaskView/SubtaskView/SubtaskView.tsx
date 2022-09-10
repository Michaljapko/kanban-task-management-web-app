import {
	StyledBoxSection,
	StyledParagraph,
} from '../../../theme/MenuBox.styled';
import { StyledSubtaskBox, StyledSubtaskInfo } from './SubtaskView.styled';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Subtask, TasksData } from '../../../types';
import { useEffect, useState } from 'react';
import { selectCurrentBoard } from '../../../store/slices/boardSlice/boardSlice';
import { selectCurrentColumn } from '../../../store/slices/columnSlice/columnSlice';
import { editTask } from '../../../store/slices/taskActionSlice/taskActionSlice';
import { getCompletedTask } from '../../../helpers/getCompletedTasks';
import { getUpdateTask } from '../../../helpers/getUpdateTask';
import { subtaskInfo } from '../../../data/textEN';
import CheckBox from '../../UI/CheckBox';
import ScrollWrapper from '../../UI/ScrollWrapper';

const SubtaskView = ({ task }: { task: TasksData }) => {
	const [taskDone, setTaskDone] = useState(0);

	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);

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

	useEffect(() => {
		setTaskDone(getCompletedTask(task.subtasks));
	}, [task, task.subtasks]);

	return (
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
	);
};

export default SubtaskView;
