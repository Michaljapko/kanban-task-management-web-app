import { StyledBack, StyledBox } from './TaskView.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setIsTaskShow } from '../../features/layout/layoutSlice';
import { selectTasksData } from '../../features/tasks/tasksSlice';

const TaskView = ({ task }: any) => {
	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasksData);
	return (
		<StyledBack onClick={() => dispatch(setIsTaskShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<p>{task.title}</p>
				<p>{task.description}</p>

				<p>
					Subtask(
					{task.subtasks.reduce((taskDone: number, task: any) => {
						if (task.isCompleted) return ++taskDone;
						return taskDone;
					}, 0)}
					of {task.subtasks.length}){' '}
				</p>
				{task.subtasks.map((subtask: any) => (
					<div>
						{subtask.isCompleted ? (
							<input type='checkbox' id='subscribeNews' name='subscribe' checked />
						) : (
							<input type='checkbox' id='subscribeNews' name='subscribe' />
						)}
						<p>{subtask.title}</p>
					</div>
				))}
				<p>Current state:</p>
				<select>
					{taskColumn?.map((column) => (
						<option value={column.name}>{column.name}</option>
					))}
				</select>
			</StyledBox>
		</StyledBack>
	);
};

export default TaskView;
