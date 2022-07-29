import { StyledBack, StyledBox } from './PopUp.styled';
import Button from '../Button';
import { deleteBoard } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';

const PopUp = () => {
	const dispatch = useAppDispatch();
	const currentBoardId = useAppSelector(selectCurrentBoard);
	return (
		<StyledBack>
			<StyledBox>
				<h2>Delete this board?</h2>
				<p>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
				<Button onClick={() => dispatch(deleteBoard(currentBoardId))}>Delete</Button>
				<Button>Cancel</Button>
			</StyledBox>
		</StyledBack>
	);
};
export default PopUp;
