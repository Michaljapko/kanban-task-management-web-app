import styled from 'styled-components';

export const StyledDot = styled.div<{ colorIndex: number }>`
	width: 15px;
	height: 15px;
	background-color: ${({ theme, colorIndex }) => {
		if (colorIndex === 1) return theme.dotFirst;
		if (colorIndex === 2) return theme.dotSecond;
		if (colorIndex === 3) return theme.dotThird;
		if (colorIndex === 4) return theme.dotFourth;
	}};
	border-radius: 50%;
	margin-right: 12px;
`;
