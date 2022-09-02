import {
	changeBoard,
	selectBoards,
	selectCurrentBoard,
} from '../../features/tasks/boardSlice';
import {
	selectCurrentDevice,
	setIsBoardAddShow,
	setIsSidebarShow,
} from '../../features/layout/layoutSlice';
import { ALL_BOARD, BOARD_CREATE, HIDE_SIDEBAR } from '../../data/textEN';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StyledFooter, StyledHead, StyledHideBox } from './Sidebar.styled';
import Button from '../Button';
import PopUp from '../PopUp';
import ThemeBox from '../ThemeBox';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const boards = useAppSelector(selectBoards);
	const currentBoards = useAppSelector(selectCurrentBoard);
	const currentDevice = useAppSelector(selectCurrentDevice);

	return (
		<PopUp
			variant='sidebar'
			layoutDispatch={() => dispatch(setIsSidebarShow())}
		>
			<div>
				<StyledHead>
					{ALL_BOARD} ({boards.length})
				</StyledHead>
					{boards.map((board) => {
						let variant: 'sidebar' | 'sidebarCurrent' = 'sidebar';
						if (board.id === currentBoards) {
							variant = 'sidebarCurrent';
						}
						return (
							<Button
								onClick={() => {
									if (currentDevice === 'desktop') {
										dispatch(changeBoard(board.id));
										return;
									}
									dispatch(changeBoard(board.id));
									dispatch(setIsSidebarShow());
								}}
								key={board.id}
								variant={variant}
								icon='board'
							>
								{board.name}
							</Button>
						);
					})}
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
