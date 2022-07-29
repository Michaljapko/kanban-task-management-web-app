import { StyledBack, StyledBox } from './TaskView.styled';
import { useAppDispatch } from '../../app/hooks';
import { setIsTaskShow } from '../../features/layout/layoutSlice';

const TaskView = ({ task }: any) => {
	const dispatch = useAppDispatch();
	return (
		<StyledBack onClick={() => dispatch(setIsTaskShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<p>{task.title}</p>
				<p>{task.description}</p>
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
			</StyledBox>
		</StyledBack>
	);
};

export default TaskView;
