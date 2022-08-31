import {
	StyledHeader,
	StyledLogoBox,
	StyledHeaderBox,
	StyledLogoText,
	StyledArrow,
} from './Header.styled';
import {
	selectIsSidebarShow,
	setIsSidebarShow,
	setIsTaskAddShow,
	selectIsDropdownHeaderShow,
	setIsDropdownHeaderShow,
} from '../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { APLICATION_TITLE } from '../../data/textEN';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import chevronDown from '../../assets/icon-chevron-down.svg';
import chavronUp from '../../assets/icon-chevron-up.svg';

import DropDown from '../DropDown';
import Button from '../Button';
import Logo from '../Logo';
import Ellipsis from '../Ellipsis';

const Header = () => {
	const dispatch = useAppDispatch();
	const taskData = useAppSelector(selectTasksData);
	const isSidebarShow = useAppSelector(selectIsSidebarShow);
	const isDropdownHeaderShow = useAppSelector(selectIsDropdownHeaderShow);

	return (
		<StyledHeader isSidebarShow={isSidebarShow}>
			<StyledHeaderBox>
				<Logo />
				<StyledLogoBox
					onClick={(event) => {
						event.stopPropagation();
						dispatch(setIsSidebarShow());
					}}
				>
					<StyledLogoText>{APLICATION_TITLE}</StyledLogoText>
					{isSidebarShow ? (
						<StyledArrow src={chavronUp} alt='Arrow Up' />
					) : (
						<StyledArrow src={chevronDown} alt='Arrow Down' />
					)}
				</StyledLogoBox>
			</StyledHeaderBox>
			<StyledHeaderBox>
				{taskData && (
					<Button
						icon='plus'
						variant='header'
						onClick={() => {
							dispatch(setIsTaskAddShow());
						}}
					/>
				)}
				{!taskData && <Button icon='plus' variant='headerOff' />}
				<Ellipsis
					onClick={() => {
						dispatch(setIsDropdownHeaderShow());
					}}
				/>
				{isDropdownHeaderShow && <DropDown variant='board' />}
			</StyledHeaderBox>
		</StyledHeader>
	);
};

export default Header;
