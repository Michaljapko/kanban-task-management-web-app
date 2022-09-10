import styled, { css } from 'styled-components';
import { PopUpVariants } from '../../../types';

export const StyledBackdrop = styled.div<{ variant?: PopUpVariants }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.backgroundBack};
	z-index: 1;

	${({ variant }) => {
		if (variant === 'sidebar')
			return css`
				@media (min-width: 992px) {
					display: none;
				}
			`;
	}}
`;
export const StyledBack = styled.div<{ variant?: PopUpVariants }>`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: flex-start;
	width: 100%;
	padding-bottom: 2rem;
	padding-top: 4rem;

	@media (min-width: 992px) {
		height: 100%;
		align-items: center;
		justify-content: center;
	}
	${({ variant }) => {
		if (variant === 'sidebar')
			return css`
				align-items: flex-start;
				@media (min-width: 992px) {
					position: relative;
					display: flex;
					justify-content: flex-start;
					background-color: transparent;
					padding-right: 300px;
					margin-top: 6rem;
					width: 0;
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
	border-radius: 0.375rem;
	padding: ${({ variant }) => (variant === 'sidebar' ? '1.5rem 0 0' : '1.5rem')};
	${({ variant }) => (variant === 'sidebar' ? '' : 'width: 100%')};
	max-width: 480px;
	background: ${({ theme }) => theme.backgroundMain};
	z-index: 2;
	${({ variant }) => {
		if (variant === 'sidebar')
			return css`
				width: 264px;
				@media (min-width: 992px) {
					position: fixed;
					flex-direction: column;
					justify-content: space-between;
					width: 300px;
					min-height: 93vh;
					top: 6rem;
					margin: 0;
					padding: 0;
					border-radius: 0px;
					border-right: 1px solid ${({ theme }) => theme.borderColor};
					padding-top: 0.9375rem;
					padding-bottom: 2rem;
				}
				@media (max-height: 800px) and (min-width: 992px) {
					padding-bottom: 3.875rem;
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

export const StyledToolBox = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;
