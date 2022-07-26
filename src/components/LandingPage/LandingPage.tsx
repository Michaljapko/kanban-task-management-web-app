import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Button from '../Button';
import TaskAdd from '../TaskAdd/TaskAdd';
import TaskCards from '../TaskCards';

import { addColumn, selectTasksData } from '../../features/tasks/tasksSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { StyledWrapper } from './LandingPage.styled';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';

const LandingPage = () => {
	const tasksData = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const dispatch = useAppDispatch();
	console.log(tasksData);
	return (
		<>
			<Header />
			<StyledWrapper>
				<Sidebar />
				{!tasksData && <p>This board is empty. Create a new column to get started.</p>}
				{tasksData && tasksData?.length > 0 && <TaskCards />}

				<Button onClick={() => dispatch(addColumn({ columnName: 'New column', currentBoard: currentBoard }))} icon='plus'>
					Add New Column
				</Button>

				{/* <TaskAdd /> */}
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
