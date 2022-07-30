import { StyledBack, StyledBox, StyledTitle, StyledDescription, StyledParagraph, StyledSubtaskBox, StyledBoxSection } from './TaskView.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setIsTaskShow } from '../../features/layout/layoutSlice';
import { selectTasksData } from '../../features/tasks/tasksSlice';

const TaskView = ({ task }: any) => {
	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasksData);
	return (
		<StyledBack onClick={() => dispatch(setIsTaskShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<StyledBoxSection>
					<StyledTitle>{task.title}</StyledTitle>
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledDescription>{task.description}</StyledDescription>
				</StyledBoxSection>

				<StyledBoxSection>
					<StyledParagraph>
						Subtask (
						{task.subtasks.reduce((taskDone: number, task: any) => {
							if (task.isCompleted) return ++taskDone;
							return taskDone;
						}, 0)}{' '}
						of {task.subtasks.length})
					</StyledParagraph>

					{task.subtasks.map((subtask: any) => (
						<StyledSubtaskBox>
							{subtask.isCompleted ? (
								<input type='checkbox' id='subscribeNews' name='subscribe' checked />
							) : (
								<input type='checkbox' id='subscribeNews' name='subscribe' />
							)}
							<p>{subtask.title}</p>
						</StyledSubtaskBox>
					))}
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledParagraph>Current state:</StyledParagraph>
					<select>
						{taskColumn?.map((column) => (
							<option value={column.name}>{column.name}</option>
						))}
					</select>
				</StyledBoxSection>
			</StyledBox>
		</StyledBack>
	);
};

export default TaskView;
