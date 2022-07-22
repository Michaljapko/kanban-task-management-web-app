import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Button from '../Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addTask, selectCount } from '../../features/tasks/tasksSlice';
import { StyledWrapper } from './LandingPage.style';

interface tasksData {
	title: string;
	describe: string;
	subtask: string[];
	status: 'doing' | 'todo';
}

const LandingPage = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);
	console.log(count);

	function handleAddTask(event: any) {
		event.preventDefault();
		const task: tasksData = {
			title: event.target.title.value,
			describe: event.target.description.value,
			subtask: [event.target.subtask.value],
			status: event.target.status.value,
		};
		dispatch(addTask(task));
		console.log(count);
	}
	return (
		<>
			<Header />
			<StyledWrapper>
				{/* <Sidebar /> */}

				<p>This board is empty. Create a new column to get started.</p>
				<Button icon='plus'>Add New Column</Button>

				<form onSubmit={handleAddTask}>
					<label htmlFor='title'>Title</label>
					<input type='text ' id='title'></input>
					<label htmlFor='description'>Description</label>
					<input type='text ' id='description'></input>
					<label htmlFor='subtask'>Subtask</label>
					<input type='text ' id='subtask'></input>
					<label htmlFor='status'>Status</label>
					<select name='status' id='status'>
						<option value='todo'>Todo</option>
						<option value='doing'>Doing</option>
					</select>
					<Button>Create Task</Button>
				</form>
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
