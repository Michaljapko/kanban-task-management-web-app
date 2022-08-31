import { StyledBox } from './Ellipsis.styled';
import ellipsis from '../../assets/icon-vertical-ellipsis.svg';

const Ellipsis = ({ onClick }: { onClick: () => void }) => {
	return (
		<StyledBox onClick={onClick}>
			<img src={ellipsis} alt='ellipsis' />
		</StyledBox>
	);
};

export default Ellipsis;
