import {
	StyledInfo,
	StyledWrapperInfo,
	StyledWrapperCard,
} from './LandingPage.styled';
import { addColumn, selectTasksData } from '../../features/tasks/tasksSlice';
import {
	selectIsBoardAddShow,
	selectIsBoardEditShow,
	selectIsDeleteBoardShow,
	selectIsDeleteTaskShow,
	selectIsSidebarShow,
	selectIsTaskAddShow,
	selectIsTaskEditShow,
} from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BoardAdd from '../BoardAdd';
import Button from '../Button';
import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskAdd from '../TaskAdd/TaskAdd';
import TaskCards from '../TaskCards';
import TaskEdit from '../TaskEdit';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { v4 as uuid } from 'uuid';
import BoardEdit from '../BoardEdit';
import DeleteMenu from '../DeleteMenu';

const LandingPage = () => {
	const tasksData = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const isSidebarShow = useAppSelector(selectIsSidebarShow);
	const isBoardAddShow = useAppSelector(selectIsBoardAddShow);
	const isBoardEditShow = useAppSelector(selectIsBoardEditShow);
	const isTaskAddShow = useAppSelector(selectIsTaskAddShow);
	const isTaskBoardShow = useAppSelector(selectIsDeleteBoardShow);
	const isTaskDeleteShow = useAppSelector(selectIsDeleteTaskShow);
	const isTaskEditShow = useAppSelector(selectIsTaskEditShow);
	const dispatch = useAppDispatch();

	return (
		<>
			{isBoardAddShow && <BoardAdd />}
			{isBoardEditShow && <BoardEdit />}
			{isTaskAddShow && <TaskAdd />}
			{isTaskEditShow && <TaskEdit />}
			{isTaskBoardShow && <DeleteMenu variant={'board'} />}
			{isTaskDeleteShow && <DeleteMenu variant={'task'} />}
			<Header />
			{isSidebarShow && <Sidebar />}

			{!tasksData && (
				<StyledWrapperInfo>
					<StyledInfo>
						This board is empty. Create a new column to get started.
					</StyledInfo>

					<Button
						variant={'landingPage'}
						onClick={() =>
							dispatch(
								addColumn({
									column: { id: uuid(), name: 'New column', tasks: [] },
									currentBoard: currentBoard,
								})
							)
						}
					>
						+ Add New Column
					</Button>
				</StyledWrapperInfo>
			)}

			{tasksData && tasksData?.length > 0 && (
				<StyledWrapperCard>
					<TaskCards />
				</StyledWrapperCard>
			)}
		</>
	);
};

export default LandingPage;
