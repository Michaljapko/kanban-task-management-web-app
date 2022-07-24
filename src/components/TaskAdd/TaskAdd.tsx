import Button from '../Button';

import { TasksData } from '../../Types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addTask, selectTasks } from '../../features/tasks/tasksSlice';

import { StyledInput, StyledTextArea } from './TaskAdd.style';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';

const TaskAdd = () => {
	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasks);
	const currentBoard = useAppSelector(selectCurrentBoard);

	function handleAddTask(event: any) {
		event.preventDefault();

		const task: TasksData = {
			title: event.target.title.value,
			describe: event.target.description.value,
			subtask: [event.target.subtask.value],
			status: event.target.status.value,
		};
		dispatch(addTask({ task: task, currentBoard: currentBoard }));
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
					{taskColumn?.map((column) => (
						<option value={column.name}>{column.name}</option>
					))}
				</select>
				<Button>Create Task</Button>
			</form>
		</div>
	);
};

export default TaskAdd;
