import styled from 'styled-components';

export const StyledBox = styled.div`
	position: relative;
	width: 1rem;
	height: 1rem;
	margin: 0.7rem 0px 0.7rem 0.7rem;
	padding-right: 2rem;
`;
export const StyledIcon = styled.img`
	position: absolute;
	width: 0.625rem;
	z-index: 2;
	opacity: 0;
`;
export const StyledCheckbox = styled.input`
	outline: 0;
	user-select: none;
	display: inline-block;
	position: absolute;
	width: 1rem;
	height: 1rem;
	margin: 0;
	opacity: 0;
	z-index: 1;
	cursor: pointer;

	& + label {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1rem;
		border: 1px solid hsla(216, 15%, 57%, 0.249);
		border-radius: 2px;
		z-index: 0;
		background-color: ${({ theme }) => theme.backgroundMain};
	}

	&:checked + label {
		background-color: ${({ theme }) => theme.themeColor};

		${StyledIcon} {
			opacity: 1;
		}
	}

	&:focus {
		outline: none;
	}
`;
