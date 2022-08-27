import styled from 'styled-components';


export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;

export const StyledSubtaskBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	border-radius: 4px;
	padding: 12px;
	background: ${({ theme }) => theme.backgroundContrast};
	color: ${({ theme }) => theme.mainColor};
`;
export const StyledSubtaskInfo = styled.p<{ complete: boolean }>`
	${({ theme }) => theme.textHeading.small}
	letter-spacing: 0;
	${({ complete, theme }) => {
		if (complete) return 'text-decoration: line-through;';
		return `color: ${theme.mainColor}`;
	}}
`;
export const StyledDescription = styled.p`
	${({ theme }) => theme.text.large}
	margin-bottom: 16px;
	color: ${({ theme }) => theme.textGrey};
`;

export const StyledParagraph = styled.p`
	${({ theme }) => theme.textHeading.small}
	margin-bottom: 16px;
	color: ${({ theme }) => theme.mainColor};
`;
