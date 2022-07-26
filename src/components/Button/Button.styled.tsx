import styled from 'styled-components';

export const StyledButton = styled.button`
	border: 0;
	border-radius: 24px;
	padding: ${(props: any) => {
		return props['data-variant'] === 'header' ? '5px 18px' : '15px 18px';
	}};
	background: #635fc7;
	font-size: 15px;
	font-family: 'Plus Jakarta Sans';
	font-weight: 700;
	font-style: normal;
	color: #fff;
`;
