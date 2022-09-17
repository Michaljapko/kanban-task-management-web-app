import {
	changeBoard,
	selectBoards,
	selectCurrentBoard,
} from 'store/slices/boardSlice/boardSlice';
import {
	selectLayout,
	setIsBoardAddShow,
	setIsSidebarShow,
} from 'store/slices/layoutSlice/layoutSlice';
import { ALL_BOARD, BOARD_CREATE, HIDE_SIDEBAR } from 'data/textEN';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
	StyledFooter,
	StyledHead,
	StyledHideBox,
	StyledWrapper,
} from './Sidebar.styled';
import ThemeBox from './ThemeBox';
import { Board } from '../../data/types/board.type';
import { Button, PopUp } from 'components/UI';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const boards = useAppSelector(selectBoards);
	const currentBoards = useAppSelector(selectCurrentBoard);
	const currentDevice = useAppSelector(selectLayout).device;

	const boardButtonHandler = (board: Board) => {
		if (currentDevice === 'desktop') {
			dispatch(changeBoard(board.id));
			return;
		}
		dispatch(changeBoard(board.id));
		dispatch(setIsSidebarShow());
	};

	return (
		<PopUp variant='sidebar' layoutDispatch={() => dispatch(setIsSidebarShow())}>
			<div>
				<StyledHead>
					{ALL_BOARD} ({boards.length})
				</StyledHead>
				<StyledWrapper>
					{boards.map((board) => {
						let variant: 'sidebar' | 'sidebarCurrent' = 'sidebar';
						if (board.id === currentBoards) {
							variant = 'sidebarCurrent';
						}
						return (
							<Button
								onClick={() => boardButtonHandler(board)}
								key={board.id}
								variant={variant}
								icon='board'
							>
								{board.name}
							</Button>
						);
					})}
				</StyledWrapper>
				<Button
					onClick={() => dispatch(setIsBoardAddShow())}
					variant='sidebarBold'
					icon='board'
				>
					{BOARD_CREATE}
				</Button>
			</div>
			<StyledFooter>
				<ThemeBox />
				<StyledHideBox>
					<Button
						onClick={() => dispatch(setIsSidebarShow())}
						variant={'sidebar'}
						icon='hide'
					>
						{HIDE_SIDEBAR}
					</Button>
				</StyledHideBox>
			</StyledFooter>
		</PopUp>
	);
};

export default Sidebar;
