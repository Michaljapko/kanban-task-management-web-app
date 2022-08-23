import styled from 'styled-components';

export const StyledBox = styled.div`
	position: relative;
	width: 16px;
	height: 16px;
	margin: 12px 0px 12px 12px;
	padding-right: 32px;
`;
export const StyledCheckbox = styled.input`
	outline: 0;
	user-select: none;
	display: inline-block;
	position: absolute;
	width: 16px;
	height: 16px;
	margin: 0;
	opacity: 0;
	z-index: 1;
	& + label {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		border: 1px solid hsla(216, 15%, 57%, 0.249);
		border-radius: 2px;
		z-index: 0;
		background-color: ${({ theme }) => theme.backgroundMain};
	}
	&:checked + label {
		background-color: ${({ theme }) => theme.themeColor};
	}

	&:focus {
		outline: none;
	}
`;
export const StyledIcon = styled.img`
	position: absolute;
	width: 10px;
	z-index: 2;
`;
