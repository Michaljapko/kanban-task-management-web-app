import styled from 'styled-components';

export const StyledHead = styled.div`
	margin-bottom: 1.1rem;
	padding: 0 1.5rem;
	color: ${({ theme }) => theme.textGrey};
	font-size: 0.75rem;
	font-weight: 700;
	line-height: 0.9rem;
	letter-spacing: 2.4px;
	text-transform: uppercase;
`;

export const StyledRadioBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	margin: 1rem;
	width: 235px;
	height: 48px;
	border-radius: 6px;
	background: ${({ theme }) => theme.backgroundContrast};
`;
export const StyledHideBox = styled.div`
	display: none;

	@media (min-width: 992px) {
		display: flex;
		margin-bottom: 47px;
		margin-top: 22px;
	}
`;
export const StyledFooter = styled.div`
	@media (min-width: 992px) {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
`;
