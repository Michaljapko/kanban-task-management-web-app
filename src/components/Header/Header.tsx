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
	selectCurrentDevice,
} from '../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { APLICATION_TITLE, TASK_ADD_HEADER } from '../../data/textEN';
import { selectTasksData } from '../../features/tasks/taskActionSlice';
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
	const currentDevice = useAppSelector(selectCurrentDevice);
	console.log(taskData);
	const renderButton = () => {
		if (taskData && taskData.length > 0 && currentDevice === 'desktop')
			return (
				<Button
					variant='header'
					onClick={() => {
						dispatch(setIsTaskAddShow());
					}}
				>
					{TASK_ADD_HEADER}
				</Button>
			);
		if (taskData && taskData.length > 0 && currentDevice === 'mobile')
			return (
				<Button
					icon='plus'
					variant='headerMobile'
					onClick={() => {
						dispatch(setIsTaskAddShow());
					}}
				/>
			);
		if (currentDevice === 'desktop')
			return <Button variant='headerOff'>{TASK_ADD_HEADER}</Button>;

		if (currentDevice === 'mobile')
			return <Button icon='plus' variant='headerOffMobile' />;
	};

	return (
		<StyledHeader isSidebarShow={isSidebarShow}>
			<StyledHeaderBox
				onClick={(event) => {
					dispatch(setIsSidebarShow());
				}}
			>
				<Logo />
				<StyledLogoBox>
					<StyledLogoText>{APLICATION_TITLE}</StyledLogoText>
					{isSidebarShow ? (
						<StyledArrow src={chavronUp} alt='Arrow Up' />
					) : (
						<StyledArrow src={chevronDown} alt='Arrow Down' />
					)}
				</StyledLogoBox>
			</StyledHeaderBox>
			<StyledHeaderBox>
				{renderButton()}
				{taskData && (
					<Ellipsis
						onClick={() => {
							dispatch(setIsDropdownHeaderShow());
						}}
					/>
				)}
				{isDropdownHeaderShow && <DropDown variant='board' />}
			</StyledHeaderBox>
		</StyledHeader>
	);
};

export default Header;
