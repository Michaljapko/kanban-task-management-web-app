import React from 'react';
import { changeBoard, selectBoards } from '../../features/tasks/boardSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Sidebar: React.FC = () => {
	const boards = useAppSelector(selectBoards);
	const dispatch = useAppDispatch();

	return (
		<>
			<p>All Board ({boards.length})</p>
			{boards.map((board) => {
				return (
					<button onClick={() => dispatch(changeBoard(board))} key={board}>
						{board}
					</button>
				);
			})}
			<button>+ Create New Board</button>
			<button>Hide Sidebar</button>
		</>
	);
};

export default Sidebar;
