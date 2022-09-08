import {
	setIsTaskAddShow,
	selectCurrentDevice,
} from '../../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { TASK_ADD_HEADER } from '../../../data/textEN';
import { selectTasksData } from '../../../features/tasks/taskActionSlice';
import Button from '../../UI/Button';

const AddTaskButton = () => {
	const dispatch = useAppDispatch();
	const taskData = useAppSelector(selectTasksData);
	const currentDevice = useAppSelector(selectCurrentDevice);

	return (
		<>
			{taskData && taskData.length > 0 && currentDevice === 'desktop' && (
				<Button
					variant='header'
					onClick={() => {
						dispatch(setIsTaskAddShow());
					}}
				>
					{TASK_ADD_HEADER}
				</Button>
			)}
            
			{taskData && taskData.length > 0 && currentDevice === 'mobile' && (
				<Button
					icon='plus'
					variant='headerMobile'
					onClick={() => {
						dispatch(setIsTaskAddShow());
					}}
				/>
			)}

			{currentDevice === 'desktop' && (
				<Button variant='headerOff'>{TASK_ADD_HEADER}</Button>
			)}

			{currentDevice === 'mobile' && (
				<Button icon='plus' variant='headerOffMobile' />
			)}
		</>
	);
};
export default AddTaskButton;
