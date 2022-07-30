import { StyledBack, StyledBox } from './PopUp.styled';
import Button from '../Button';
import { deleteBoard } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { setIsPopUpShow } from '../../features/layout/layoutSlice';

const PopUp = () => {
	const dispatch = useAppDispatch();
	const currentBoardId = useAppSelector(selectCurrentBoard);
	return (
		<StyledBack onClick={() => dispatch(setIsPopUpShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<h2>Delete this board?</h2>
				<p>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
				<Button
					onClick={() => {
						dispatch(setIsPopUpShow());
						dispatch(deleteBoard(currentBoardId));
					}}
				>
					Delete
				</Button>
				<Button onClick={() => {
						dispatch(setIsPopUpShow());
					}}>Cancel</Button>
			</StyledBox>
		</StyledBack>
	);
};
export default PopUp;
