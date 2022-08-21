import {
	StyledBack,
	StyledBox,
	StyledBoxSection,
	StyledHeading,
} from './PopUp.styled';

const PopUp = ({ children, title, layoutDispatch, variant }: any) => {
	return (
		<StyledBack onClick={layoutDispatch}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				{title && (
					<StyledBoxSection>
						<StyledHeading variant={variant}>{title}</StyledHeading>
					</StyledBoxSection>
				)}
				{children}
			</StyledBox>
		</StyledBack>
	);
};
export default PopUp;
