import { changeBoard, selectBoards } from '../../features/tasks/boardSlice';
import { addBoard } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { StyledWrapper, StyledHead, StyledBack } from './Sidebar.styled';

import Button from '../Button';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const boards = useAppSelector(selectBoards);

	return (
		<StyledBack>
			<StyledWrapper>
				<StyledHead>All Boards ({boards.length})</StyledHead>
				{boards.map((board) => {
					return (
						<Button onClick={() => dispatch(changeBoard(board.name))} key={board.id} variant='sidebar' icon='board'>
							{board.name}
						</Button>
					);
				})}

				<Button onClick={() => dispatch(addBoard('ddd'))} variant='sidebarBold' icon='board'>
					+ Create New Board
				</Button>
			</StyledWrapper>
		</StyledBack>
	);
};

export default Sidebar;
