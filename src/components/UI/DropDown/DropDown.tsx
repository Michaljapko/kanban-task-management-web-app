import {
	setIsBoardEditShow,
	setIsDeleteBoardShow,
	setIsDeleteTaskShow,
	setIsDropdownTaskShow,
	setIsDropdownHeaderShow,
	setIsTaskEditShow,
} from '../../../features/layout/layoutSlice';
import { StyledDropMenu, StyledDropMenuButton } from './DropDown.styled';
import { useAppDispatch } from '../../../app/hooks';
import { DELETE, EDIT } from '../../../data/textEN';

const DropDown = ({ variant }: { variant: 'board' | 'task' }) => {
	const dispatch = useAppDispatch();
	let editFunction: typeof setIsBoardEditShow | typeof setIsTaskEditShow;
	let deleteFunction: typeof setIsDeleteBoardShow | typeof setIsDeleteTaskShow;
	let closeFunction:
		| typeof setIsDropdownTaskShow
		| typeof setIsDropdownHeaderShow;

	if (variant === 'board') {
		editFunction = setIsBoardEditShow;
		deleteFunction = setIsDeleteBoardShow;
		closeFunction = setIsDropdownHeaderShow;
	}
	if (variant === 'task') {
		editFunction = setIsTaskEditShow;
		deleteFunction = setIsDeleteTaskShow;
		closeFunction = setIsDropdownTaskShow;
	}

	return (
		<StyledDropMenu>
			<StyledDropMenuButton
				onClick={() => {
					dispatch(editFunction());
					dispatch(closeFunction());
				}}
			>
				{EDIT} {variant}
			</StyledDropMenuButton>
			<StyledDropMenuButton
				variant={'delete'}
				onClick={() => {
					dispatch(deleteFunction());
					dispatch(closeFunction());
				}}
			>
				{DELETE} {variant}
			</StyledDropMenuButton>
		</StyledDropMenu>
	);
};

export default DropDown;
