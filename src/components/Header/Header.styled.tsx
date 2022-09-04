import styled from 'styled-components';

export const StyledHeader = styled.div<{ isSidebarShow: boolean }>`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	height: 4rem;
	width: 100vw;

	background: ${({ theme }) => theme.backgroundMain};

	@media (min-width: 992px) {
		padding: 0;
		padding-right: 2rem;
		height: 97px;
		border-bottom: 1px solid ${({ theme }) => theme.borderColor};
	}
`;

export const StyledLogoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StyledHeaderBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
`;

export const StyledArrow = styled.img`
	@media (min-width: 992px) {
		display: none;
	}
`;
export const StyledLogoText = styled.h1`
	${({ theme }) => theme.textHeading.large}
	color:${({ theme }) => theme.mainColor};
	@media (min-width: 992px) {
		font-size: 24px;
		line-height: 30px;
	}
`;
