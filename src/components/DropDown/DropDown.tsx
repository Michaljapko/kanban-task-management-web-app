import { useAppDispatch } from '../../app/hooks';
import {
	setIsBoardEditShow,
	setIsDeleteBoardShow,
	setIsDeleteTaskShow,
	setIsDropDownShow,
	setIsTaskEditShow,
} from '../../features/layout/layoutSlice';

import { StyledDropMenu, StyledDropMenuButton } from './DropDown.styled';
const DropDown = ({ variant }: { variant: 'board' | 'task' }) => {
	const dispatch = useAppDispatch();
	let editFunction: typeof setIsBoardEditShow | typeof setIsTaskEditShow;
	let deleteFunction: typeof setIsDeleteBoardShow | typeof setIsDeleteTaskShow;

	if (variant === 'board') {
		editFunction = setIsBoardEditShow;
		deleteFunction = setIsDeleteBoardShow;
	}
	if (variant === 'task') {
		editFunction = setIsTaskEditShow;
		deleteFunction = setIsDeleteTaskShow;
	}

	return (
		<StyledDropMenu>
			<StyledDropMenuButton
				onClick={() => {
					dispatch(editFunction());
					dispatch(setIsDropDownShow());
				}}
			>
				Edit {variant}
			</StyledDropMenuButton>
			<StyledDropMenuButton
				variant={'delete'}
				onClick={() => {
					dispatch(deleteFunction());
					dispatch(setIsDropDownShow());
				}}
			>
				Delete {variant}
			</StyledDropMenuButton>
		</StyledDropMenu>
	);
};

export default DropDown;
