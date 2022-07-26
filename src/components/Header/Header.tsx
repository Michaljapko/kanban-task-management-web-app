import logo from '../../assets/logo-mobile.svg';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';
import chevronDown from '../../assets/icon-chevron-down.svg';

import Button from '../Button';

import { StyledHeader, StyledLogoBox, StyledHeaderBox, StyledLogoTitle } from './Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderBox>
				<img src={logo} alt='Kanban Logo' />
				<StyledLogoBox>
					<StyledLogoTitle>Platform Launch</StyledLogoTitle>
					<img src={chevronDown} alt='Arrow Down' />
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
