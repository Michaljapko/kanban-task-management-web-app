import styled from 'styled-components';
export const StyledDropMenu = styled.div`
	position: absolute;
	top: 3rem;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	margin-right: 1.5rem;
	box-shadow: 1rem 0.625rem 1.25rem rgba(54, 78, 126, 0.25);
	border-radius: 0.5rem;
	width: 194px;
	height: 94px;
	padding: 1rem;
	background: ${({ theme }) => theme.backgroundMain};
	@media (min-width: 992px) {
		top: 4.5rem;
	}
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
