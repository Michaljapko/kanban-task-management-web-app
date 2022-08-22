import styled from 'styled-components';



export const StyledHead = styled.div`
	margin-bottom: 19px;
	padding: 0 24px;
	font-size: 12px;
	letter-spacing: 2.4px;
	text-transform: uppercase;
`;

export const StyledRadioBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	margin: 16px;
	width: 235px;
	height: 48px;
	border-radius: 6px;
	background: ${({ theme }) => theme.backgroundContrast};
`;
