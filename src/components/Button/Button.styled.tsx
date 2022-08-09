import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
	${(props: any) => {
		if (props['data-variant'] === 'sidebarCurrent') {
			return css`
				display: flex;
				justify-content: flex-start;
				gap: 12px;
				border: 0;
				border-radius: 0px 100px 100px 0px;
				width: 240px;
				padding: 15px 24px;
				background: #635fc7;
				color: #fff;
				text-align: start;
			`;
		}

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
			border: 0;
			border-radius: 24px;
			padding: ${(props: any) => {
				if (props['data-variant'] === 'header' || props['data-variant'] === 'header-off') {
					return '5px 18px';
				}
				return '15px 18px';
			}};
			width: 100%;
			background: ${(props: any) => {
				return props['data-variant'] === 'secondary' ? props.theme.color.secondaryButton : props.theme.color.primaryButton;
			}};
			font-size: 15px;
			font-family: 'Plus Jakarta Sans';
			font-weight: 700;
			font-style: normal;
			color: ${(props: any) => {
				return props['data-variant'] === 'secondary' ? props.theme.color.mainPurple : props.theme.color.textColor;
			}};
			opacity: ${(props: any) => {
				if (props['data-variant'] === 'header-off') return '0.25';
			}};
		`;
	}};
`;
