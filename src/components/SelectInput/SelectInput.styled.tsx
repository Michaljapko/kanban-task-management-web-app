import styled from 'styled-components';

export const StyledSelect = styled.div`
	.Select__control {
		box-shadow: none;
		border: 1px solid ${({ theme }) => theme.borderGray};
		border-radius: 0.25rem;
		height: 40px;
		width: 100%;
		padding: 0 1rem;
		background: ${({ theme }) => theme.backgroundMain};
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
	.Select__dropdown-indicator {
		color: ${({ theme }) => theme.themeColor};
		&:hover {
			color: ${({ theme }) => theme.themeColor};
		}
	}
`;
