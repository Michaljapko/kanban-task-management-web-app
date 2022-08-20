import styled from 'styled-components';
export const StyledDropMenu = styled.div`
	position: absolute;
	top: 50px;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	margin-right: 24px;
	box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
	border-radius: 8px;
	width: 194px;
	height: 94px;
	padding: 16px;
	background: ${({ theme }) => theme.backgroundMain};
`;

export const StyledDropMenuButton = styled.button<{ variant?: 'delete' }>`
	${({ theme }) => theme.text.large};
	border: none;
	text-align: start;
	background: none;
	cursor: pointer;
	color: ${({ theme, variant }) =>
		variant === 'delete' ? theme.colorError : theme.textGrey};
`;
