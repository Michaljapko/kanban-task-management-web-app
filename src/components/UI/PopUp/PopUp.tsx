import {
	StyledBack,
	StyledBackdrop,
	StyledBox,
	StyledBoxSection,
	StyledHeading,
} from './PopUp.styled';
import { PopUpTypes } from '../../../types/types';


const PopUp = ({
	children,
	title,
	layoutDispatch,
	variant,
	headingElement,
}: PopUpTypes) => {
	return (
		<>
			<StyledBackdrop variant={variant} onClick={layoutDispatch} />
			<StyledBack variant={variant}>
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
		</>
	);
};
export default PopUp;
