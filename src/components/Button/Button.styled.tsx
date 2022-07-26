import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
	${(props: any) => {
		if (props['data-variant'] === 'sidebar' || props['data-variant'] === 'sidebarBold') {
			return css`
				display: flex;
				justify-content: flex-start;
				gap: 12px;
				border: 0;
				padding: 15px 24px;
				background: none;
				color: ${(props: any) => {
					return props['data-variant'] === 'sidebarBold' ? '#635FC7' : '#828FA3';
				}};
				text-align: start;
			`;
		}
		return css`
			margin: 0 12px;
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
			text-align: start;
			color: #fff;
		`;
	}};
`;
