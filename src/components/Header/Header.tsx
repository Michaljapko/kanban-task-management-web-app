import {
	StyledHeader,
	StyledLogoBox,
	StyledHeaderBox,
	StyledLogoText,
	StyledArrowUp,
	StyledArrowDown,
} from './Header.styled';
import {
	selectLayout,
	setIsSidebarShow,
	setIsDropdownHeaderShow,
} from '../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { APLICATION_TITLE } from '../../data/textEN';
import { selectTasksData } from '../../features/tasks/taskActionSlice';
import AddTaskButton from './AddTaskButton';
import Ellipsis from '../UI/Ellipsis';
import DropDown from '../UI/DropDown';
import Logo from './Logo';

const Header = () => {
	const dispatch = useAppDispatch();
	const taskData = useAppSelector(selectTasksData);
	const isSidebarShow = useAppSelector(selectLayout).isSidebarShow;
	const isDropdownHeaderShow = useAppSelector(selectLayout).isDropdownHeaderShow;

	return (
		<StyledHeader isSidebarShow={isSidebarShow}>
			<StyledHeaderBox
				onClick={() => {
					dispatch(setIsSidebarShow());
				}}
			>
				<Logo />
				<StyledLogoBox>
					<StyledLogoText>{APLICATION_TITLE}</StyledLogoText>
					{isSidebarShow ? <StyledArrowUp /> : <StyledArrowDown />}
				</StyledLogoBox>
			</StyledHeaderBox>
			<StyledHeaderBox>
				<AddTaskButton />
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
