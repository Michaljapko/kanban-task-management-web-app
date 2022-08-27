import styled from 'styled-components';

export const StyledHeader = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	height: 4rem;
	width: 100vw;
	background: ${({ theme }) => theme.backgroundMain};
`;

export const StyledLogoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StyledHeaderBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const StyledLogoText = styled.h1`
	${({ theme }) => theme.textHeading.large}
	color:${({ theme }) => theme.mainColor}
`;
