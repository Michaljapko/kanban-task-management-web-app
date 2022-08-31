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
import {
	StyledFooter,
	StyledHead,
	StyledHideBox,
	StyledRadioBox,
} from './Sidebar.styled';
import { toogleTheme } from '../../features/layout/themeSlice';
import Button from '../Button';
import moon from '../../assets/icon-dark-theme.svg';
import sun from '../../assets/icon-light-theme.svg';

import PopUp from '../PopUp';

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
				<>
					{boards.map((board) => {
						let variant: 'sidebar' | 'sidebarCurrent' = 'sidebar';
						if (board.id === currentBoards) {
							variant = 'sidebarCurrent';
						}
						return (
							<Button
								onClick={() => {
									if (currentDevice === 'desktop') {
										console.log('?');
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
				</>

				<Button
					onClick={() => dispatch(setIsBoardAddShow())}
					variant='sidebarBold'
					icon='board'
				>
					{BOARD_CREATE}
				</Button>
			</div>
			<StyledFooter>
				<StyledRadioBox>
					<img src={sun} alt='Light Theme' />
					<input
						type='checkbox'
						id='theme'
						value='JavaScript'
						onChange={() => dispatch(toogleTheme())}
					/>
					<img src={moon} alt='Light Theme' />
				</StyledRadioBox>
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
