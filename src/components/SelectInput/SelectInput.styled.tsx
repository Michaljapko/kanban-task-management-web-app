import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
	.Select__control {
		width: 100%;
		background: ${({ theme }) => theme.backgroundMain};
		border: 1px solid ${({ theme }) => theme.borderGray};
		border-radius: 4px;
		box-shadow: none;
		height: 40px;
		padding: 0 16px;
		cursor: pointer;
	}
	.Select__indicator-separator {
		display: none;
	}
	.Select__control--is-focused {
		border-color: ${({ theme }) => theme.themeColor};
		outline: none;
	}
	.Select__control:hover {
		border-color: ${({ theme }) => theme.themeColor};
	}
	.Select__value-container {
		padding: 0;
	}
	.Select__single-value {
		${({ theme }) => theme.text.large}
		color: ${({ theme }) => theme.mainColor};
	}
	.Select__menu {
		${({ theme }) => theme.text.large}
		color: ${({ theme }) => theme.textGrey};
		outline: none;
		background-color: ${({ theme }) => theme.backgroundSelect};
		box-shadow: none;
	}
	.Select__option {
		color: ${({ theme }) => theme.textGrey};
		background-color: ${({ theme }) => theme.backgroundSelect};
		cursor: pointer;
		&:active {
			background-color: ${({ theme }) => theme.backgroundSelect};
		}
	}
	.Select__listbox {
		background-color: ${({ theme }) => theme.backgroundSelect};
	}
`;
