import { ButtonTypes } from '../../types/types';
import { StyledButton } from './Button.styled';
import board from '../../assets/icon-board.svg';
import plus from '../../assets/icon-add-task-mobile.svg';
import hide from '../../assets/icon-hide-sidebar.svg';

const Button = ({
	children,
	icon,
	onClick,
	variant,
	type,
	width,
}: ButtonTypes) => {
	const getIcon = (icon: string) => {
		if (icon === 'plus') return plus;
		if (icon === 'board') return board;
		if (icon === 'hide') return hide;
	};

	return (
		<StyledButton onClick={onClick} variant={variant} type={type} width={width}>
			<>
				{icon && <img src={getIcon(icon)} alt={icon} />}
				{children}
			</>
		</StyledButton>
	);
};
export default Button;
