import styled from 'styled-components';


export const StyledSubtaskBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
	border-radius: 0.25rem;
	padding: 0.75rem;
	background: ${({ theme }) => theme.backgroundContrast};
	color: ${({ theme }) => theme.mainColor};
	cursor: pointer;
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
