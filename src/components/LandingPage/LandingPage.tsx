import {
	selectIsBoardAddShow,
	selectIsBoardEditShow,
	selectIsDeleteBoardShow,
	selectIsDeleteTaskShow,
	selectIsSidebarShow,
	selectIsTaskAddShow,
	selectIsTaskEditShow,
	setIsBoardAddShow,
	setIsBoardEditShow,
} from '../../features/layout/layoutSlice';
import {
	StyledInfo,
	StyledWrapperInfo,
	StyledWrapperCard,
} from './LandingPage.styled';
import { BOARD_ADD, COLUMN_ADD, EMPTY, EMPTY_BOARD } from '../../data/textEN';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import BoardAdd from '../BoardAdd';
import Button from '../Button';
import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskAdd from '../TaskAdd/TaskAdd';
import TaskCards from '../TaskCards';
import TaskEdit from '../TaskEdit';
import BoardEdit from '../BoardEdit';
import DeleteMenu from '../DeleteMenu';

const LandingPage = () => {
	const tasksData = useAppSelector(selectTasksData);
	const isSidebarShow = useAppSelector(selectIsSidebarShow);
	const isBoardAddShow = useAppSelector(selectIsBoardAddShow);
	const isBoardEditShow = useAppSelector(selectIsBoardEditShow);
	const isTaskAddShow = useAppSelector(selectIsTaskAddShow);
	const isTaskBoardShow = useAppSelector(selectIsDeleteBoardShow);
	const isTaskDeleteShow = useAppSelector(selectIsDeleteTaskShow);
	const isTaskEditShow = useAppSelector(selectIsTaskEditShow);
	const dispatch = useAppDispatch();
	console.log(tasksData);

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

			{(!tasksData || tasksData?.length === 0) && (
				<StyledWrapperInfo>
					<StyledInfo>
						{tasksData?.length === 0 ? EMPTY_BOARD : EMPTY}
					</StyledInfo>
					<Button
						variant={'landingPage'}
						onClick={() => {
							tasksData?.length === 0
								? dispatch(setIsBoardEditShow())
								: dispatch(setIsBoardAddShow());
						}}
					>
						{tasksData?.length === 0 ? COLUMN_ADD : BOARD_ADD}
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
