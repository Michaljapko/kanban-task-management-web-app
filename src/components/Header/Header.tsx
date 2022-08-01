import logo from '../../assets/logo-mobile.svg';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import chevronDown from '../../assets/icon-chevron-down.svg';
import chavronUp from '../../assets/icon-chevron-up.svg';
import Button from '../Button';

import { StyledHeader, StyledLogoBox, StyledHeaderBox, StyledLogoText, StyledDropMenu } from './Header.styled';
import {
	selectIsSidebarShow,
	setIsSidebarShow,
	setIsTaskAddShow,
	setIsPopUpShow,
	selectIsDropDownShow,
	setIsDropDownShow,
} from '../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useState } from 'react';
import { selectTasksData } from '../../features/tasks/tasksSlice';

const Header = () => {
	const [isDropMenuShow, setIsDropMenuShow] = useState<boolean>(false);

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
					{isSidebarShow ? <img src={chavronUp} alt='Arrow Up' /> : <img src={chevronDown} alt='Arrow Down' />}
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
				{!taskData && <Button icon='plus' variant='header-off' />}
				<img
					src={ellipsis}
					alt='ellipsis'
					onClick={() => {
						dispatch(setIsDropDownShow());
					}}
				/>
				{isDropDownShow && (
					<StyledDropMenu>
						<button
							onClick={() => {
								dispatch(setIsPopUpShow());
								dispatch(setIsDropDownShow());
							}}
						>
							Delete Board
						</button>
						<button>Edit Board</button>
					</StyledDropMenu>
				)}
			</StyledHeaderBox>
		</StyledHeader>
	);
};

export default Header;
