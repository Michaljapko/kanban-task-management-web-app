import styled from 'styled-components';
export const StyledBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	background: #00000038;
`;
export const StyledBox = styled.div`
	margin: 0 16px;
	padding: 24px;
	padding-bottom: 0;
	width: 100%;
	background: #fff;
	border-radius: 6px;
`;

export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;

export const StyledSubtaskBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	padding: 12px;
	background: #f4f7fd;
`;
export const StyledTitle = styled.p`
	${({ theme }) => {
		return theme.textHeading.large;
	}};
	margin-bottom: 16px;
`;

export const StyledDescription = styled.p`
	color: #828fa3;
	${({ theme }) => {
		return theme.text.large;
	}};
	margin-bottom: 16px;
`;
export const StyledParagraph = styled.p`
	${({ theme }) => {
		return theme.text.medium;
	}}
	margin-bottom: 16px;
	color: #828fa3;
`;
