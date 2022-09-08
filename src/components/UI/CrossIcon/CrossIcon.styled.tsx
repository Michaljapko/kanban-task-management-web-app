import { ReactComponent as Cross } from '../../../assets/icon-cross.svg';
import styled from 'styled-components';

export const StyledCrossIcon = styled(Cross)`
	fill: ${({ theme }) => theme.textGrey};
	overflow: unset;
	&:hover {
		fill: ${({ theme }) => theme.colorError};
	}
`;
