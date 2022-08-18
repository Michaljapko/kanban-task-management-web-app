import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-center;
	justify-content: flex-start;
	height: 100%;
	padding: 1rem;
	gap: 25px;
`;

export const StyledInfo = styled.p`
	${({ theme }) => theme.textHeading.large};
	color: ${({ theme }) => theme.textGrey};
`;
