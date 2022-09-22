import { StyledCrossIcon } from './CrossIcon.styled';

const CrossIcon = ({
	onClick,
}: {
	onClick: React.MouseEventHandler<SVGSVGElement>;
}) =>  <StyledCrossIcon onClick={onClick} />

export default CrossIcon;
