import styled from 'styled-components';

export const StyledHeading = styled.div`
	${({ theme }) => theme.textHeading.small}
	display: flex;
	margin-bottom: 24px;
	width: 280px;
	text-transform: uppercase;
`;

export const StyledTitle = styled.p`
	${({ theme }) => theme.textHeading.medium}
	color: ${({ theme }) => theme.mainColor}
`;

export const StyledCard = styled.div`
	margin-bottom: 24px;
	width: 280px;
	padding: 23px 16px;
	background: ${({ theme }) => theme.backgroundMain};
	box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
	border-radius: 8px;
	&:hover ${StyledTitle} {
		color: ${({ theme }) => theme.themeColor};
	}
`;
export const StyledParagraph = styled.p`
	${({ theme }) => theme.text.medium}
	color: ${({ theme }) => theme.textGrey};
`;
