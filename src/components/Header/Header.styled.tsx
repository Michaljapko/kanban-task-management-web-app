import styled from 'styled-components';

export const StyledHeader = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	height: 64px;
	width: 100%;
	background: ${({ theme }) => theme.backgroundMain};
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

export const StyledLogoText = styled.h1`
	${({ theme }) => theme.textHeading.large}
	color:${({ theme }) => theme.mainColor}
`;
