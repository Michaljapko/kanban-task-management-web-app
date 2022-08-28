import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;

	height: 100%;
`;
export const StyledWrapperInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding: 1rem;
	gap: 1.5rem;
`;
export const StyledWrapperCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-center;
	justify-content: flex-start;
	height: 100%;
	padding: 5.5rem 1rem;
	gap: 1.5rem;
	@media (min-width: 992px) {
		padding: 121px 24px;
	}
`;

export const StyledInfo = styled.p`
	${({ theme }) => theme.textHeading.large};
	color: ${({ theme }) => theme.textGrey};
	text-align: center;
`;
