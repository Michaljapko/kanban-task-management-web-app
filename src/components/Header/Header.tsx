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
} from '../../store/slices/layoutSlice/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { APLICATION_TITLE } from '../../data/textEN';
import { selectTasksData } from '../../store/slices/taskActionSlice/taskActionSlice';
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
