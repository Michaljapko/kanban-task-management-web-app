import React from 'react';
import { changeBoard, selectBoards } from '../../features/tasks/boardSlice';
import { addBoard } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { StyledWrapper, StyledHead } from './Sidebar.styled';

const Sidebar = () => {
	const boards = useAppSelector(selectBoards);
	const dispatch = useAppDispatch();

	return (
		<StyledWrapper>
			
				<StyledHead>All Board ({boards.length})</StyledHead>
				{boards.map((board) => {
					return (
						<button onClick={() => dispatch(changeBoard(board.name))} key={board.id}>
							{board.name}
						</button>
					);
				})}

				<button onClick={() => dispatch(addBoard('ddd'))}>+ Create New Board</button>
				<button>Hide Sidebar</button>
			
		</StyledWrapper>
	);
};

export default Sidebar;
