import styled from 'styled-components';

export const StyledDot = styled.div<{ colorIndex: number }>`
	width: 15px;
	height: 15px;
	background-color: ${({ theme, colorIndex }) => {
		return theme.dotColors[colorIndex];
	}};
	border-radius: 50%;
	margin-right: 12px;
`;
