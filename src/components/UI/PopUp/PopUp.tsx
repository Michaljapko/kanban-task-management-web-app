import {
	StyledBack,
	StyledBackdrop,
	StyledBox,
	StyledBoxSection,
	StyledHeading,
	StyledToolBox,
} from './PopUp.styled';
import { PopUpTypes } from '../../../types';
import CrossIcon from '../CrossIcon';

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
							<StyledToolBox>
								{headingElement}
								<CrossIcon onClick={layoutDispatch} />
							</StyledToolBox>
						</StyledBoxSection>
					)}
					{children}
				</StyledBox>
			</StyledBack>
		</>
	);
};
export default PopUp;
