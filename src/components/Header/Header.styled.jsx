import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.headBackground};
	padding: 0 16px;
`;
