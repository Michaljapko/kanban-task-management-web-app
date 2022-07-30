import styled from 'styled-components';

export const StyledCard = styled.div`
	margin-bottom: 24px;
	width: 280px;
	padding: 23px 16px;
	background: #ffffff;
	box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
	border-radius: 8px;
`;
export const StyledHeading = styled.p`
	${({ theme }) => {
		return theme.textHeading.small;
	}}
	text-transform: uppercase;
`;
export const StyledTitle = styled.p`
	${({ theme }) => {
		return theme.textHeading.medium;
	}}
`;
export const StyledParagraph = styled.p`
	${({ theme }) => {
		return theme.text.medium;
	}}
	color: #828FA3;
`;
