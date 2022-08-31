import { styled } from '../../theme/theme';
import { css } from 'styled-components';

const switchDot = css`
	content: '';
	position: relative;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background-color: #fff;
	transition: transform 0.1s ease-in-out;
`;
export const StyledRadioBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 1.5rem;
	margin: 1rem;
	height: 48px;
	border-radius: 6px;
	background: ${({ theme }) => theme.backgroundContrast};
	@media (min-width: 992px) {
		margin: 0 2rem;
	}
`;
export const StyledSwitch = styled.input`
	outline: 0;
	user-select: none;
	display: inline-block;
	position: absolute;
	width: 1rem;
	height: 1rem;
	margin: 0;
	opacity: 0;
	z-index: 1;

	& + label {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 20px;
		border: none;
		border-radius: 12px;
		z-index: 0;
		background-color: ${({ theme }) => theme.themeColor};
	}
	& + label::after {
		${switchDot};
		transform: translateX(-10px);
	}

	&:checked + label::after {
		${switchDot};
		transform: translateX(10px);
	}
	&:focus {
		outline: none;
	}
	&:hover + label {
		background-color: ${({ theme }) => theme.buttonPrimaryHover};
	}
`;
