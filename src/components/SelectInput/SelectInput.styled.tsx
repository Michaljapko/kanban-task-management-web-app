import { styled } from 'styled-components';

export const StyledSelect = styled(Select)`
	.Select__control {
		width: 100%;
		background: ${({ theme }) => theme.backgroundMain};
		border: 1px solid ${({ theme }) => theme.borderGray};
		border-radius: 4px;

		height: 40px;
		padding: 0 16px;
	}
	.Select__indicator_separator {
		width: 0;
	}
	.Select__single-value {
		${({ theme }) => theme.text.large}
		color: ${({ theme }) => theme.mainColor};
	}
`;
