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
	min-height: 100vh;
	width: 100%;
	padding: 1rem;
	gap: 1.5rem;
`;
export const StyledWrapperCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-center;
	justify-content: flex-start;
	min-height: 100vh;
	padding: 5.5rem 1rem;
	gap: 1.5rem;
	overflow: auto;
	@media (min-width: 992px) {
		padding: 7.5rem 1.5rem;
	}

	&::-webkit-scrollbar {
		display: block;
		height: 0.5rem;
		width: 0.5rem;
		background-color: ${({ theme }) => theme.backgroundContrast};
	}
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.themeColor};
	}
`;

export const StyledHidebox = styled.button`
	display: none;
	@media (min-width: 992px) {
		position: absolute;
		left: 0px;
		bottom: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		width: 3.5rem;
		height: 3rem;
		background: ${({ theme }) => theme.buttonPrimary};
		border-radius: 0rem 6.25rem 6.25rem 0rem;
		cursor: pointer;
		&:hover {
			background: ${({ theme }) => theme.buttonPrimaryHover};
		}
	}
`;

export const StyledInfo = styled.p`
	${({ theme }) => theme.textHeading.large};
	color: ${({ theme }) => theme.textGrey};
	text-align: center;
`;
