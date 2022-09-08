import { StyledCrossIcon } from './CrossIcon.styled';

const CrossIcon = ({ onClick } : {onClick: () => void }) => {
	return <StyledCrossIcon onClick={onClick} />;
};

export default CrossIcon;
