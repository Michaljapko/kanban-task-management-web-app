import styled from 'styled-components';

export const StyledBoxSection = styled.div`
	margin-bottom: 1.5rem;
`;

export const StyledSubtaskBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
	border-radius: 0.25rem;
	padding: 0.75rem;
	background: ${({ theme }) => theme.backgroundContrast};
	color: ${({ theme }) => theme.mainColor};
	&:hover {
		background: ${({ theme }) => theme.backgroundSubtaskHover};
	}
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
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.textGrey};
`;

export const StyledParagraph = styled.p`
	${({ theme }) => theme.textHeading.small}
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.mainColor};
`;
