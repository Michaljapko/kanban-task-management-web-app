import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	background: ${({ theme }) => theme.headBackground};
`;

export const StyledLogoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const StyledHeaderBox = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const StyledLogoTitle = styled.h1`
	font-size: 18px;
	color: #000112;
`;
