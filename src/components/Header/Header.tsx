import logo from '../../assets/logo-mobile.svg';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import chevronDown from '../../assets/icon-chevron-down.svg';
import chavronUp from '../../assets/icon-chevron-up.svg';
import Button from '../Button';

import { StyledHeader, StyledLogoBox, StyledHeaderBox, StyledLogoTitle } from './Header.styled';
import { selectIsSidebarShow, setIsSidebarShow } from '../../features/layout/layoutSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const Header = () => {
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
				<Button icon='plus' variant='header' />
				<img src={ellipsis} alt='ellipsis' />
			</StyledHeaderBox>
		</StyledHeader>
	);
};

export default Header;
