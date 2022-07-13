import React from 'react';
import Logo from '../../assets/logo-mobile.svg';

import { StyledHeader } from './Header.styled';

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<img src={Logo} alt='Kanban Logo' />
			<h3>Platform Launch</h3>
			<button>Add New Task</button>
		</StyledHeader>
	);
};

export default Header;
