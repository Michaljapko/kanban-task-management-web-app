import styled from 'styled-components';

export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;

export const StyledSubtaskBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	padding: 12px;
	background: ${({ theme }) => theme.backgroundContrast};
	color: ${({ theme }) => theme.mainColor};
`;

export const StyledDescription = styled.p`
	${({ theme }) => theme.text.large}
	margin-bottom: 16px;
	color: ${({ theme }) => theme.textGrey};
`;
export const StyledParagraph = styled.p`
	${({ theme }) => theme.text.medium}
	margin-bottom: 16px;
	color: ${({ theme }) => theme.textGrey};
`;
