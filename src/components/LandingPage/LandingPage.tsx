import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Button from '../Button';
import TaskAdd from '../TaskAdd/TaskAdd';
import TaskCards from '../TaskCards';

import { selectTasks } from '../../features/tasks/tasksSlice';
import { useAppSelector } from '../../app/hooks';
import { StyledWrapper } from './LandingPage.style';

const LandingPage = () => {
	const tasks = useAppSelector(selectTasks);
	console.log(tasks);
	return (
		<>
			<Header />
			<StyledWrapper>
				<Sidebar />
				{tasks?.length === 0 && (
					<>
						<p>This board is empty. Create a new column to get started.</p>
						<Button icon='plus'>Add New Column</Button>
					</>
				)}
				{tasks && tasks?.length > 0 && <TaskCards />}
				<TaskCards />
				<TaskAdd />
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
