import {
	BOARD_DELETE,
	DELETE,
	CANCEL,
	TASK_DELETE,
	boardDeleteInfo,
	taskDeleteInfo,
} from '../../../data/textEN';
import {
	setIsDeleteBoardShow,
	setIsDeleteTaskShow,
} from '../../../store/slices/layoutSlice/layoutSlice';
import {
	selectCurrentBoard,
	selectCurrentBoardName,
} from '../../../store/slices/boardSlice/boardSlice';
import {
	changeCurrentTask,
	selectCurrentTask,
	selectCurrentTaskName,
} from '../../../store/slices/taskSlice/taskSlice';
import {
	deleteBoard,
	deleteTask,
} from '../../../store/slices/taskActionSlice/taskActionSlice';
import { selectCurrentColumn } from '../../../store/slices/columnSlice/columnSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledText, StyledWrapper } from './DeleteMenu.styled';
import Button from '../Button';
import PopUp from '../PopUp';
import { DeleteMenuProps } from './DeleteMenu.types';

const DeleteMenu = ({ variant }: DeleteMenuProps) => {
	const dispatch = useAppDispatch();
	const columnId = useAppSelector(selectCurrentColumn);
	const boardId = useAppSelector(selectCurrentBoard);
	const boardName = useAppSelector(selectCurrentBoardName);
	const taskId = useAppSelector(selectCurrentTask);
	const taskName = useAppSelector(selectCurrentTaskName);

	const getTitle = () => {
		if (variant === 'board') return BOARD_DELETE;
		if (variant === 'task') return TASK_DELETE;
	};
	const getText = () => {
		if (variant === 'board') return boardDeleteInfo(boardName);
		if (variant === 'task') return taskDeleteInfo(taskName!);
	};
	const boardDeleteHandler = () => {
		dispatch(deleteBoard(boardId));
		dispatch(setIsDeleteBoardShow());
	};
	const taskDeleteHandler = () => {
		dispatch(changeCurrentTask(''));
		dispatch(setIsDeleteTaskShow());
		dispatch(
			deleteTask({
				currentBoard: boardId,
				columnId: columnId,
				taskId: taskId,
			})
		);
	};
	const closeHandler = () => {
		if (variant === 'board') dispatch(setIsDeleteBoardShow());
		if (variant === 'task') dispatch(setIsDeleteTaskShow());
	};
	const deleteHandler = () => {
		if (variant === 'board') boardDeleteHandler();
		if (variant === 'task') taskDeleteHandler();
	};

	return (
		<PopUp
			title={getTitle()}
			layoutDispatch={() => closeHandler()}
			variant={'delete'}
		>
			<StyledText>{getText()}</StyledText>
			<StyledWrapper>
				<Button variant='delete' width='full' onClick={() => deleteHandler()}>
					{DELETE}
				</Button>
				<Button variant='secondary' width='full' onClick={() => () => closeHandler()}>
					{CANCEL}
				</Button>
			</StyledWrapper>
		</PopUp>
	);
};
export default DeleteMenu;
