import styled from 'styled-components';

export const StyledInput = styled.input<{ error: string }>`
	padding: 8px 16px;
	border: 1px solid ${({ theme }) => theme.borderGray};
	border-color: ${({ theme, error }) =>
		typeof error === 'string' ? theme.colorError : theme.borderGray};
	border-radius: 4px;
	width: 100%;
	background: none;
	${({ theme }) => theme.text.large}
	color: ${({ theme }) => theme.mainColor};
`;
export const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
`;

export const StyledError = styled.p`
	${({ theme }) => theme.text.large}
	position: absolute;
	right: 16px;
	display: flex;
	align-items: center;
	padding-left: 6px;
	color: ${({ theme }) => theme.colorError};
	background-color: ${({ theme }) => theme.backgroundMain};
`;
