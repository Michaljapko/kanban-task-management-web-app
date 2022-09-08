import { StyledBox } from './Ellipsis.styled';
import { ReactComponent as EllipsisIcon } from '../../../assets/icon-vertical-ellipsis.svg';

const Ellipsis = ({ onClick }: { onClick: () => void }) => {
	return (
		<StyledBox onClick={onClick}>
			<EllipsisIcon />
		</StyledBox>
	);
};

export default Ellipsis;
