import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Button from '../Button';
import TaskAdd from '../TaskAdd/TaskAdd';
import TaskCards from '../TaskCards';

import { addColumn, selectTasks } from '../../features/tasks/tasksSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { StyledWrapper } from './LandingPage.style';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';

const LandingPage = () => {
	const tasks = useAppSelector(selectTasks);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const dispatch = useAppDispatch();

	return (
		<>
			<Header />
			<StyledWrapper>
				<Sidebar />
				{tasks?.length === 0 && <p>This board is empty. Create a new column to get started.</p>}
				{tasks && tasks?.length > 0 && <TaskCards />}
				<Button onClick={() => dispatch(addColumn({ columnName: 'New column', currentBoard: currentBoard }))} icon='plus'>
					Add New Column
				</Button>

				<TaskAdd />
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
