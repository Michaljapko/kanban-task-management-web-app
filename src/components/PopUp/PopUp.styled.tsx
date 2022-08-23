import styled from 'styled-components';

export const StyledBack = styled.div`
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
`;
export const StyledBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 0 16px;
	border-radius: 6px;
	padding: ${({ variant }) => (variant === 'sidebar' ? '24px 0 0' : '24px')};
	${({ variant }) => (variant === 'sidebar' ? '' : 'width: 100%')};
	max-width: 480px;
	background: ${({ theme }) => theme.backgroundMain};
`;
export const StyledHeading = styled.h2<{ variant?: 'delete' }>`
	${({ theme }) => theme.textHeading.large}
	color: ${({ theme, variant }) =>
		variant === 'delete' ? theme.colorError : theme.mainColor};
`;
export const StyledBoxSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;
