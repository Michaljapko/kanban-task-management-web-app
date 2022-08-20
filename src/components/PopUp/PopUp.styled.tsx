import styled from 'styled-components';

export const StyledBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.backgroundBack};
`;
export const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 0 16px;
	border-radius: 6px;
	padding: 24px;
	width: 100%;
	max-width: 480px;
	background: ${({ theme }) => theme.backgroundMain};
`;
export const StyledHeading = styled.h2`
	${({ theme }) => theme.textHeading.large}
	color: ${({ theme }) => theme.mainColor};
`;
export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;
