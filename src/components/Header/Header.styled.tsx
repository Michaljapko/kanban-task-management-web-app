import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	height: 64px;
	background: #fff;
`;

export const StyledLogoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const StyledHeaderBox = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const StyledLogoText = styled.h1`
	${({ theme }) => {
		return theme.textHeading.large;
	}};
`;

export const StyledDropMenu = styled.div`
	position: absolute;
	background: #ffffff;
	box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
	border-radius: 8px;
	right: 0;
	top: 40px;
	margin-right: 15px;
	p {
		padding: 16px;
	}
`;
