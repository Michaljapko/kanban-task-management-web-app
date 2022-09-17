export type ButtonVariants =
	| 'header'
	| 'headerMobile'
	| 'sidebar'
	| 'sidebarBold'
	| 'sidebarCurrent'
	| 'headerOff'
	| 'headerOffMobile'
	| 'secondary'
	| 'delete'
	| 'buttonBig';

export interface ButtonProps {
	children?: JSX.Element | JSX.Element[] | string;
	icon?: 'plus' | 'board' | 'hide';
	variant?: ButtonVariants;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'reset' | 'submit';
	width?: 'full';
}
