import styled from 'styled-components';

export const StyledScrollWrapper = styled.div<{
	currentHeight: number;
}>`
	max-height: 300px;
	overflow: auto;
	${({ currentHeight }) => {
		console.log(currentHeight);
		if (currentHeight >= 260) return 'padding-right:10px; margin-bottom:10px;';
	}}
	&::-webkit-scrollbar {
		display: block;
		width: 0.3rem;
		border-radius: 9999px;
		background-color: ${({ theme }) => theme.backgroundContrast};
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 9999px;
		background: ${({ theme }) => theme.themeColor};
	}
`;
