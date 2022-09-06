import styled from 'styled-components';
import { InputTypes } from '../../types/types';

export const StyledInput = styled.input<InputTypes>`
	padding: 0.5rem 1rem;
	border: 1px solid ${({ theme }) => theme.borderGray};
	border-color: ${({ theme, error }) =>
		typeof error === 'string' ? theme.colorError : theme.borderGray};
	border-radius: 0.25rem;
	width: 100%;
	min-width: 100%;
	max-height: 400px;
	background: none;
	${({ theme }) => theme.text.large}
	color: ${({ theme }) => theme.mainColor};
	&:focus {
		outline: 0;
		border-color: ${({ theme }) => theme.themeColor};
	}
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
	right: 1rem;
	display: flex;
	align-items: center;
	padding-left: 0.3rem;
	color: ${({ theme }) => theme.colorError};
	background-color: ${({ theme }) => theme.backgroundMain};
`;
