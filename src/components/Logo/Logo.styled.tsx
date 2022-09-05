import styled from 'styled-components';

export const StyledLogo = styled.div<{ isSidebarShow: boolean }>`
	display: none;
	@media (min-width: 992px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 300px;
		height: 7vh;
		border-right: 1px solid transparent;

		${({ isSidebarShow, theme }) => {
			if (isSidebarShow)
				return `
			border-color: ${theme.borderColor};
			border-bottom: 1px solid white;`;
		}};
	}
`;
export const StyledLogoMobile = styled.div`
	@media (min-width: 992px) {
		display: none;
	}
`;
