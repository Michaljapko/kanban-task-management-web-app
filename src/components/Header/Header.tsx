import React from 'react';
import Logo from '../../assets/logo-mobile.svg';
import Button from '../Button';

import { StyledHeader } from './Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<img src={Logo} alt='Kanban Logo' />
			<h3>Platform Launch</h3>
			<Button>Add New Task</Button>
		</StyledHeader>
	);
};

export default Header;
