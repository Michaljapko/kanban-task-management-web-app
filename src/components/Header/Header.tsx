import logo from '../../assets/logo-mobile.svg';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import chevronDown from '../../assets/icon-chevron-down.svg';
import chavronUp from '../../assets/icon-chevron-up.svg';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import DropDown from '../DropDown';
import Button from '../Button';
import {
	StyledHeader,
	StyledLogoBox,
	StyledHeaderBox,
	StyledLogoText,
} from './Header.styled';
import {
	selectIsSidebarShow,
	setIsSidebarShow,
	setIsTaskAddShow,
	selectIsDropDownShow,
	setIsDropDownShow,
} from '../../features/layout/layoutSlice';

const Header = () => {
	const dispatch = useAppDispatch();
	const taskData = useAppSelector(selectTasksData);
	const isSidebarShow = useAppSelector(selectIsSidebarShow);
	const isDropDownShow = useAppSelector(selectIsDropDownShow);

	return (
		<StyledHeader>
			<StyledHeaderBox>
				<img src={logo} alt='Kanban Logo' />
				<StyledLogoBox
					onClick={(event) => {
						event.stopPropagation();
						dispatch(setIsSidebarShow());
					}}
				>
					<StyledLogoText>Platform Launch</StyledLogoText>
					{isSidebarShow ? (
						<img src={chavronUp} alt='Arrow Up' />
					) : (
						<img src={chevronDown} alt='Arrow Down' />
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
				<img
					src={ellipsis}
					alt='ellipsis'
					onClick={() => {
						dispatch(setIsDropDownShow());
					}}
				/>
				{isDropDownShow && <DropDown variant='board' />}
			</StyledHeaderBox>
		</StyledHeader>
	);
};

export default Header;
