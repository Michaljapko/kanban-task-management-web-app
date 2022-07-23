import Button from '../Button';

import { tasksData } from '../../Types/types';
import { useAppDispatch } from '../../app/hooks';
import { addTask } from '../../features/tasks/tasksSlice';

import { StyledInput, StyledTextArea } from './TaskAdd.style';

const TaskAdd = () => {
	const dispatch = useAppDispatch();

	function handleAddTask(event: any) {
		event.preventDefault();

		const task: tasksData = {
			id: Math.random().toString(),
			title: event.target.title.value,
			describe: event.target.description.value,
			subtask: [event.target.subtask.value],
			status: event.target.status.value,
		};
		dispatch(addTask(task));
	}
	return (
		<div>
			<h2>Add New Task</h2>
			<form onSubmit={handleAddTask}>
				<label htmlFor='title'>Title</label>
				<StyledInput id='title' type='text' placeholder='e.g. Take coffee break'></StyledInput>
				<label htmlFor='description'>Description</label>
				<StyledTextArea
					id='description'
					placeholder='e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.'
				></StyledTextArea>
				<label htmlFor='subtask'>Subtask</label>
				<StyledInput id='subtask' type='text' placeholder='e.g. Make coffee'></StyledInput>
				<StyledInput id='subtask' type='text' placeholder='e.g. Drink coffee & smile'></StyledInput>
				<label htmlFor='status'>Status</label>
				<select name='status' id='status'>
					<option value='todo'>Todo</option>
					<option value='doing'>Doing</option>
				</select>
				<Button>Create Task</Button>
			</form>
		</div>
	);
};

export default TaskAdd;
