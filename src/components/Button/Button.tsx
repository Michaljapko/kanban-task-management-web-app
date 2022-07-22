import React from 'react';
import { StyledButton } from './Button.styled';
import plus from '../../assets/icon-add-task-mobile.svg';

interface ButtonTypes {
	children: string;
	icon?: 'plus';
}

const Button = ({ children, icon }: ButtonTypes) => {
	return (
		<StyledButton>
			{icon && <img src={plus} alt={icon} />}
			{children}
		</StyledButton>
	);
};

export default Button;
