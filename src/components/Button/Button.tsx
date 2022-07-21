import React from 'react';
import { StyledButton } from './Button.styled';
import plus from '../../assets/icon-add-task-mobile.svg';

interface Button {
	children: string;
	icon?: 'plus';
}

const Button = ({ children, icon }: Button) => {
	return (
		<StyledButton>
			{icon && <img src={plus} alt={icon} />}
			{children}
		</StyledButton>
	);
};

export default Button;
