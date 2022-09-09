import { css } from 'styled-components';
import { styled } from '../../../theme/theme';
import { ButtonTypes, ButtonVariants } from '../../../types/types';
import { ReactComponent as Board } from '../../../assets/icon-board.svg';
import { ReactComponent as Hide } from '../../../assets/icon-hide-sidebar.svg';

export const StyledBoardIcon = styled(Board)<{ variant?: ButtonVariants }>`
	fill: ${({ variant, theme }) => {
		if (variant === 'sidebarBold') return theme.themeColor;
		if (variant === 'sidebarCurrent') return theme.buttonText;
		return theme.textGrey;
	}};
`;
export const StyledHideIcon = styled(Hide)<{ variant?: ButtonVariants }>`
	fill: ${({ theme }) => theme.textGrey};
`;
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
				width: 92%;
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
				border-radius: 0rem 6.25rem 6.25rem 0rem;
				width: 92%;
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
				}
			`;
		if (variant === 'buttonBig')
			return css`
				display: flex;
				align-items: center;
				${({ theme }) => theme.textHeading.xlarge}
				padding: 0 3.4375rem;
				border: none;
				border-radius: 0.375rem;
				background: ${({ theme }) => theme.buttonBig};
				color: ${({ theme }) => theme.textGrey};
				cursor: pointer;
				&:hover {
					color: ${({ theme }) => theme.themeColor};
				}
			`;
		return css`
		    ${() => theme.textHeading.medium};
			${() => {
				if (width) return 'width:100%;';
			}}
			border: 0;
			border-radius: 1.5rem;
			padding: ${() => {
				if (variant === 'headerMobile' || variant === 'headerOffMobile')
					return '0.3rem 1rem';
				if (variant === 'headerOff' || variant === 'header')
					return '1rem 1.5rem';
				return '0.5rem 1rem';
			}}};
		
			background-color: ${() => {
				if (variant === 'secondary') return theme.buttonSecondary;
				if (variant === 'delete') return theme.buttonDestructive;
				return theme.buttonPrimary;
			}};
			color: ${() => (variant === 'secondary' ? theme.themeColor : theme.buttonText)};
			opacity: ${() => {
				if (variant === 'headerOffMobile') return '0.25';
				if (variant === 'headerOff') return '0.25';
			}};
			font-size: ${() => {
				if (variant === 'headerOff' || variant === 'header') return '1rem';
				return '0.8rem';
			}};
	       font-weight: ${() => (variant === 'secondary' ? 700 : 500)};
			line-height:1.4rem;
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
