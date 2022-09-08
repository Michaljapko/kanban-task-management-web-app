import { ButtonTypes } from '../../../types/types';
import { StyledBoardIcon, StyledHideIcon, StyledButton } from './Button.styled';
import { ReactComponent as Plus } from '../../../assets/icon-add-task-mobile.svg';

const Button = ({
	children,
	icon,
	onClick,
	variant,
	type,
	width,
}: ButtonTypes) => {
	
	const getIcon = (icon: string) => {
		if (icon === 'plus') return <Plus />;
		if (icon === 'board') return <StyledBoardIcon variant={variant} />;
		if (icon === 'hide') return <StyledHideIcon variant={variant} />;
	};

	return (
		<StyledButton onClick={onClick} variant={variant} type={type} width={width}>
			<>
				{icon && getIcon(icon)}
				{children}
			</>
		</StyledButton>
	);
};
export default Button;
