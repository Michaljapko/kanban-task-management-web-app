import {
	StyledInfo,
	StyledWrapperInfo,
	StyledWrapperCard,
	StyledWrapper,
	StyledHidebox,
} from './LandingPage.styled';
import { BOARD_CREATE, COLUMN_ADD, EMPTY, EMPTY_BOARD } from 'data/textEN';
import { ReactComponent as ShowSidebar } from 'assets/icon-show-sidebar.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectTasksData } from 'store/slices/taskActionSlice/taskActionSlice';
import { Button } from 'components/UI';
import {
	BoardAdd,
	BoardEdit,
	DeleteMenu,
	TaskAdd,
	TaskEdit,
} from 'components/ActionsMenus';
import {
	selectLayout,
	setIsBoardAddShow,
	setIsBoardEditShow,
	setIsSidebarShow,
} from 'store/slices/layoutSlice/layoutSlice';
import TaskCards from 'components/TaskCards';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

const LandingPage = () => {
	const tasksData = useAppSelector(selectTasksData);
	const isSidebarShow = useAppSelector(selectLayout).isSidebarShow;
	const isBoardAddShow = useAppSelector(selectLayout).isBoardAddShow;
	const isBoardEditShow = useAppSelector(selectLayout).isBoardEditShow;
	const isTaskAddShow = useAppSelector(selectLayout).isTaskAddShow;
	const isBoardDeleteShow = useAppSelector(selectLayout).isBoardDeleteShow;
	const isTaskDeleteShow = useAppSelector(selectLayout).isTaskDeleteShow;
	const isTaskEditShow = useAppSelector(selectLayout).isTaskEditShow;
	const dispatch = useAppDispatch();

	const buttonHandler = () =>
		tasksData?.length === 0
			? dispatch(setIsBoardEditShow())
			: dispatch(setIsBoardAddShow());

	return (
		<>
			{isBoardAddShow && <BoardAdd />}
			{isBoardEditShow && <BoardEdit />}
			{isTaskAddShow && <TaskAdd />}
			{isTaskEditShow && <TaskEdit />}
			{isBoardDeleteShow && <DeleteMenu variant={'board'} />}
			{isTaskDeleteShow && <DeleteMenu variant={'task'} />}
			<Header />
			<StyledWrapper>
				{isSidebarShow && <Sidebar />}
				{!isSidebarShow && (
					<StyledHidebox onClick={(event) => dispatch(setIsSidebarShow())}>
						<ShowSidebar />
					</StyledHidebox>
				)}

				{(!tasksData || !tasksData.length) && (
					<StyledWrapperInfo>
						<StyledInfo>{tasksData?.length === 0 ? EMPTY_BOARD : EMPTY}</StyledInfo>
						<Button variant={'header'} onClick={() => buttonHandler()}>
							{tasksData?.length === 0 ? COLUMN_ADD : BOARD_CREATE}
						</Button>
					</StyledWrapperInfo>
				)}

				{tasksData && tasksData?.length > 0 && (
					<StyledWrapperCard>
						<TaskCards />
					</StyledWrapperCard>
				)}
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
