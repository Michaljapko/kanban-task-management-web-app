import { css } from 'styled-components';
import { styled } from '../../theme/theme';
import { ButtonTypes } from '../../types/types';

export const StyledButton = styled.button<ButtonTypes>`
	${({ variant, theme, width }) => {
		if (variant === 'sidebarCurrent')
			return css`
				${() => theme.textHeading.medium};
				display: flex;
				justify-content: flex-start;
				gap: 0.7rem;
				border: 0;
				border-radius: 0rem 6.25rem 6.25rem 0rem;
				width: 15rem;
				padding: 1rem 1.5rem;
				background: ${() => theme.buttonPrimary};
				color: ${() => theme.buttonText};
				font-weight: 500;
				text-align: start;
				cursor: pointer;
			`;

		if (variant === 'sidebar' || variant === 'sidebarBold')
			return css`
				${() => theme.textHeading.medium};
				display: flex;
				justify-content: flex-start;
				gap: 0.75rem;
				border: 0;
				padding: 1rem 1.5rem;
				background: none;
				color: ${() =>
					variant === 'sidebarBold' ? theme.themeColor : theme.textGrey};
				font-weight: ${() => (variant === 'sidebarBold' ? 700 : 500)};
				text-align: start;
				cursor: pointer;
				&:hover {
					color: ${() => theme.themeColor};
					background-color: ${() => theme.buttonSecondaryHover};
					border-radius: 0rem 6.25rem 6.25rem 0rem;
					width: 15rem;
				}
			`;

		return css`
		    ${() => theme.textHeading.medium};
			${() => {
				if (width) return 'width:100%;';
			}}
			border: 0;
			border-radius: 1.5rem;
			padding: ${() =>
				variant === 'header' || variant === 'headerOff'
					? '0.3rem 1rem'
					: '0.5rem 1rem'}};
		
			background-color: ${() => {
				if (variant === 'secondary') return theme.buttonSecondary;
				if (variant === 'delete') return theme.buttonDestructive;
				return theme.buttonPrimary;
			}};
			color: ${() => (variant === 'secondary' ? theme.themeColor : theme.buttonText)};
			opacity: ${() => {
				if (variant === 'headerOff') return '0.25';
			}};
			font-size: 0.8rem;
			line-height:1.4rem;
			transition: background-color 0.3s ease-out;
			cursor: pointer;
			&:hover {
				background-color: ${() => {
					if (variant === 'secondary') return theme.buttonSecondaryHover;
					if (variant === 'delete') return theme.buttonDestructiveHover;
					return theme.buttonPrimaryHover;
				}};
			}
		`;
	}};
`;
