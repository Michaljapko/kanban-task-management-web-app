import {
	StyledBack,
	StyledBox,
	StyledBoxSection,
	StyledHeading,
} from './PopUp.styled';
import { PopUpTypes } from '../../types/types';

const PopUp = ({
	children,
	title,
	layoutDispatch,
	variant,
	headingElement,
}: PopUpTypes) => {
	return (
		<StyledBack onClick={layoutDispatch}>
			<StyledBox variant={variant} onClick={(e) => e.stopPropagation()}>
				{title && (
					<StyledBoxSection>
						<StyledHeading variant={variant}>{title}</StyledHeading>
						{headingElement}
					</StyledBoxSection>
				)}
				{children}
			</StyledBox>
		</StyledBack>
	);
};
export default PopUp;
