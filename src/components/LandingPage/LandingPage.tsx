import { StyledInfo, StyledWrapper } from './LandingPage.styled';
import { addColumn, selectTasksData } from '../../features/tasks/tasksSlice';
import {
	selectIsBoardAddShow,
	selectIsBoardEditShow,
	selectIsPopUpShow,
	selectIsSidebarShow,
	selectIsTaskAddShow,
	selectIsTaskEditShow,
} from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import BoardAdd from '../BoardAdd/BoadAdd';
import BoardEdit from '../BoardEdit';
import Button from '../Button';
import Header from '../Header';
import PopUp from '../PopUp';
import Sidebar from '../Sidebar';
import TaskAdd from '../TaskAdd/TaskAdd';
import TaskCards from '../TaskCards';
import TaskEdit from '../TaskEdit';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { v4 as uuid } from 'uuid';

const LandingPage = () => {
	const tasksData = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const isSidebarShow = useAppSelector(selectIsSidebarShow);
	const isBoardAddShow = useAppSelector(selectIsBoardAddShow);
	const isBoardEditShow = useAppSelector(selectIsBoardEditShow);
	const isTaskAddShow = useAppSelector(selectIsTaskAddShow);
	const isPopUpShow = useAppSelector(selectIsPopUpShow);
	const isTaskEditShow = useAppSelector(selectIsTaskEditShow);
	const dispatch = useAppDispatch();
	return (
		<>
			{isBoardAddShow && <BoardAdd />}
			{isBoardEditShow && <BoardEdit />}
			{isTaskAddShow && <TaskAdd />}
			{isTaskEditShow && <TaskEdit />}
			{isPopUpShow && <PopUp />}

			<Header />
			{isSidebarShow && <Sidebar />}

			<StyledWrapper>
				{!tasksData && <StyledInfo>This board is empty. Create a new column to get started.</StyledInfo>}
				{tasksData && tasksData?.length > 0 && <TaskCards />}

				<Button
					onClick={() => dispatch(addColumn({ column: { id: uuid(), name: 'New column', tasks: [] }, currentBoard: currentBoard }))}
					icon='plus'
				>
					Add New Column
				</Button>
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
