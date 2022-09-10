import { PopUpVariants } from './popUpVariants.type';

export interface PopUpTypes {
	children?: JSX.Element | JSX.Element[] | string;
	title?: string;
	layoutDispatch: () => void;
	variant?: PopUpVariants;
	headingElement?: JSX.Element | JSX.Element[] | string;
}
