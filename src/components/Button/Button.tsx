import { StyledButton } from './Button.styled';
import { ButtonTypes } from '../../Types/types';

import plus from '../../assets/icon-add-task-mobile.svg';
import board from '../../assets/icon-board.svg';

const Button = ({ children, icon, onClick, variant }: ButtonTypes) => {
	const getIcon = (icon: string) => {
		if (icon === 'plus') return plus;
		if (icon === 'board') return board;
	};

	return (
		<StyledButton onClick={onClick} data-variant={variant}>
			{icon && <img src={getIcon(icon)} alt={icon} />}
			{children}
		</StyledButton>
	);
};

export default Button;
