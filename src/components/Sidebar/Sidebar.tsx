import { StyledBack, StyledHead, StyledRadioBox, StyledWrapper } from './Sidebar.styled';
import { changeBoard, selectBoards, selectCurrentBoard } from '../../features/tasks/boardSlice';
import { setIsBoardAddShow, setIsSidebarShow } from '../../features/layout/layoutSlice';
import { toogleTheme } from '../../features/layout/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import Button from '../Button';
import moon from '../../assets/icon-dark-theme.svg';
import sun from '../../assets/icon-light-theme.svg';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const boards = useAppSelector(selectBoards);
	const currentBoards = useAppSelector(selectCurrentBoard);

	return (
		<StyledBack onClick={() => dispatch(setIsSidebarShow())}>
			<StyledWrapper onClick={(e) => e.stopPropagation()}>
				<StyledHead>All Boards ({boards.length})</StyledHead>
				{boards.map((board) => {
					let variant: 'sidebar' | 'sidebarCurrent' = 'sidebar';
					if (board.id === currentBoards) {
						variant = 'sidebarCurrent';
					}
					return (
						<Button
							onClick={() => {
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

				<Button onClick={() => dispatch(setIsBoardAddShow())} variant='sidebarBold' icon='board'>
					+ Create New Board
				</Button>
				<StyledRadioBox>
					<img src={sun} alt='Light Theme' />
					<input type='checkbox' id='theme' value='JavaScript' onChange={() => dispatch(toogleTheme())} />
					<img src={moon} alt='Light Theme' />
				</StyledRadioBox>
			</StyledWrapper>
		</StyledBack>
	);
};

export default Sidebar;
