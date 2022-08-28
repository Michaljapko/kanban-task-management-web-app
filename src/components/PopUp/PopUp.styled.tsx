import styled, { css } from 'styled-components';
import { PopUpVariants } from '../../types/types';

export const StyledBack = styled.div<{ variant?: PopUpVariants }>`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.backgroundBack};
	z-index: 1;
	${({ variant }) => {
		if (variant === 'sidebar')
			return css`
				@media (min-width: 992px) {
					position: relative;
					justify-content: flex-start;
					background-color: transparent;
					width: 300px;
					padding-top: 96px;
					z-index: 0;
				}
			`;
	}}
`;
export const StyledBox = styled.div<{ variant?: PopUpVariants }>`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 0 1rem;
	border-radius: 6px;
	padding: ${({ variant }) =>
		variant === 'sidebar' ? '1.5rem 0 0' : '1.5rem'};
	${({ variant }) => (variant === 'sidebar' ? '' : 'width: 100%')};
	max-width: 480px;
	background: ${({ theme }) => theme.backgroundMain};

	${({ variant }) => {
		if (variant === 'sidebar')
			return css`
				@media (min-width: 992px) {
					position: relative;
					width: 300px;
					height: 100%;
					margin: 0;
					padding: 0;
					border-radius: 0px;
					border-right: 1px solid ${({ theme }) => theme.borderColor};
				}
			`;
	}}
`;
export const StyledHeading = styled.h2<{ variant?: PopUpVariants }>`
	${({ theme }) => theme.textHeading.large}
	color: ${({ theme, variant }) =>
		variant === 'delete' ? theme.colorError : theme.mainColor};
`;
export const StyledBoxSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;
