import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	setIsDeleteBoardShow,
	setIsDeleteTaskShow,
} from '../../features/layout/layoutSlice';

import {
	selectCurrentBoard,
	selectCurrentBoardName,
} from '../../features/tasks/boardSlice';
import { selectCurrentColumn } from '../../features/tasks/columnSlice';

import {
	selectCurrentTask,
	selectCurrentTaskName,
} from '../../features/tasks/taskSlice';
import { deleteBoard, deleteTask } from '../../features/tasks/tasksSlice';
import Button from '../Button';
import PopUp from '../PopUp';

const DeleteMenu = ({ variant }: { variant: 'board' | 'task' }) => {
	const boardId = useAppSelector(selectCurrentBoard);
	const boardName = useAppSelector(selectCurrentBoardName);
	const taskName = useAppSelector(selectCurrentTaskName);
	const taskId = useAppSelector(selectCurrentTask);
	const columnId = useAppSelector(selectCurrentColumn);

	const dispatch = useAppDispatch();

	if (variant === 'board')
		return (
			<PopUp
				title={'Delete this board?'}
				layoutDispatch={() => dispatch(setIsDeleteBoardShow())}
			>
				<p>
					Are you sure you want to delete the ‘{boardName}’ board? This action
					will remove all columns and tasks and cannot be reversed.
				</p>
				<Button
					onClick={() => {
						dispatch(deleteBoard(boardId));
						dispatch(setIsDeleteBoardShow());
					}}
				>
					Delete
				</Button>
				<Button onClick={() => dispatch(setIsDeleteBoardShow())}>Close</Button>
			</PopUp>
		);

	if (variant === 'task')
		return (
			<PopUp
				title={'Delete this task?'}
				layoutDispatch={() => dispatch(setIsDeleteTaskShow())}
			>
				<p>
					Are you sure you want to delete the ‘{taskName}’ task and its
					subtasks? This action cannot be reversed.
				</p>
				<Button
					onClick={() => {
						dispatch(setIsDeleteTaskShow());
						dispatch(
							deleteTask({
								currentBoard: boardId,
								columnId: columnId,
								taskId: taskId,
							})
						);
					}}
				>
					Delete
				</Button>
				<Button onClick={() => dispatch(setIsDeleteTaskShow())}>Close</Button>
			</PopUp>
		);

	return <></>;
};

export default DeleteMenu;
