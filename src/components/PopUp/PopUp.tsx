import {
	StyledBack,
	StyledBox,
	StyledBoxSection,
	StyledHeading,
} from './PopUp.styled';

const PopUp = ({
	children,
	title,
	layoutDispatch,
	variant,
	headingElement,
}: any) => {
	return (
		<StyledBack onClick={layoutDispatch}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
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
