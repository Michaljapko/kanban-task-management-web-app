import { StyledBack, StyledBox } from './PopUp.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import Button from '../Button';
import { deleteBoard } from '../../features/tasks/tasksSlice';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { setIsPopUpShow } from '../../features/layout/layoutSlice';

const PopUp = () => {
	const dispatch = useAppDispatch();
	const currentBoardId = useAppSelector(selectCurrentBoard);
	return (
		<StyledBack onClick={() => dispatch(setIsPopUpShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<h2>Delete this board?</h2>
				
			
			</StyledBox>
		</StyledBack>
	);
};
export default PopUp;
