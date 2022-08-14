import styled, { css } from 'styled-components';
import { ButtonStyled } from '../../types/types';

export const StyledButton = styled.button`
	${({ variant, theme }: ButtonStyled) => {
		if (variant === 'sidebarCurrent')
			return css`
				display: flex;
				justify-content: flex-start;
				gap: 12px;
				border: 0;
				border-radius: 0px 100px 100px 0px;
				width: 240px;
				padding: 15px 24px;
				background: ${() => theme.buttonPrimary};
				color: ${() => theme.buttonText};
				text-align: start;
			`;

		if (variant === 'sidebar' || variant === 'sidebarBold')
			return css`
				display: flex;
				justify-content: flex-start;
				gap: 12px;
				border: 0;
				padding: 15px 24px;
				background: none;
				color: ${() => (variant === 'sidebarBold' ? theme.mainColor : theme.textGrey)};
				text-align: start;
			`;

		return css`
			border: 0;
			border-radius: 24px;
			padding: ${() => (variant === 'header' || variant === 'headerOff' ? '5px 18px' : '15px 18px')}};
			width: 100%;
			background: ${() => (variant === 'secondary' ? theme.buttonSecondary : theme.buttonPrimary)};
			font-size: 15px;
			font-family: 'Plus Jakarta Sans';
			font-weight: 700;
			font-style: normal;
			color: ${() => (variant === 'secondary' ? theme.mainColor : theme.buttonText)};
			opacity: ${() => {
				if (variant === 'headerOff') return '0.25';
			}};
			&:hover {
				background-color: ${() => theme.buttonPrimaryHover};
			}
		`;
	}};
`;
