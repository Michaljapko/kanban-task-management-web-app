import { ButtonVariants } from "./buttonVariant.type";

export interface ButtonTypes {
	children?: JSX.Element | JSX.Element[] | string;
	icon?: 'plus' | 'board' | 'hide';
	variant?: ButtonVariants;
	onClick?: () => void;
	type?: 'button' | 'reset' | 'submit';
	width?: 'full';
}
