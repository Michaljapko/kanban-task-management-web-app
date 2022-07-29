import logo from '../../assets/logo-mobile.svg';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import chevronDown from '../../assets/icon-chevron-down.svg';
import chavronUp from '../../assets/icon-chevron-up.svg';
import Button from '../Button';

import { StyledHeader, StyledLogoBox, StyledHeaderBox, StyledLogoTitle, StyledDropMenu } from './Header.styled';
import { selectIsSidebarShow, setIsSidebarShow, setIsTaskAddShow, setIsPopUpShow } from '../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useState } from 'react';

const Header = () => {
	const [isDropMenuShow, setIsDropMenuShow] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const isSidebarShow = useAppSelector(selectIsSidebarShow);

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
					<StyledLogoTitle>Platform Launch</StyledLogoTitle>
					{isSidebarShow ? <img src={chavronUp} alt='Arrow Up' /> : <img src={chevronDown} alt='Arrow Down' />}
				</StyledLogoBox>
			</StyledHeaderBox>
			<StyledHeaderBox>
				<Button
					icon='plus'
					variant='header'
					onClick={() => {
						dispatch(setIsTaskAddShow());
					}}
				/>

				<img
					src={ellipsis}
					alt='ellipsis'
					onClick={() => {
						setIsDropMenuShow(!isDropMenuShow);
					}}
				/>
				{isDropMenuShow && (
					<StyledDropMenu>
						<button onClick={() => dispatch(setIsPopUpShow())}>Delete Board</button>

						<button>Edit Board</button>
					</StyledDropMenu>
				)}
			</StyledHeaderBox>
		</StyledHeader>
	);
};

export default Header;
