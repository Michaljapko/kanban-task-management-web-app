import React from 'react';
import { StyledButton } from './Button.styled';
import plus from '../../assets/icon-add-task-mobile.svg';
import { ButtonTypes } from '../../Types/types';

const Button = ({ children, icon, onClick }: ButtonTypes) => {
	return (
		<StyledButton onClick={onClick}>
			{icon && <img src={plus} alt={icon} />}
			{children}
		</StyledButton>
	);
};

export default Button;
