import { ButtonTypes } from '../../types/types';
import { StyledButton } from './Button.styled';
import board from '../../assets/icon-board.svg';
import plus from '../../assets/icon-add-task-mobile.svg';

const Button = ({ children, icon, onClick, variant, type }: ButtonTypes) => {
	const getIcon = (icon: string) => {
		if (icon === 'plus') return plus;
		if (icon === 'board') return board;
	};

	return (
		<StyledButton onClick={onClick} variant={variant} type={type}>
			<>
				{icon && <img src={getIcon(icon)} alt={icon} />}
				{children}
			</>
		</StyledButton>
	);
};

export default Button;
