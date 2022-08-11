import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	color: {
		backBackground: 'hsla(0, 0%, 0%, 0.22)',
		primaryButton: 'hsl(242, 48%, 58%)',
		mainPurple: 'hsl(242, 48%, 57%)',
		textColor: 'hsl(0, 0%, 100%)',
	},
	themeLight: { mainBackground: 'hsl(0, 0%, 100%)', mainColor: 'hsl(237, 100%, 3%)', secondaryButton: 'hsla(241, 48%, 57%, 0.1)' },
	themeDark: { mainBackground: 'hsl(235, 16%, 15%)', mainColor: 'hsl(0, 0%, 100%)', secondaryButton: 'hsl(0, 0%, 100%)' },
	textHeading: {
		xlarge: `
			font-family: 'Plus Jakarta Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			line-height: 30px;
		`,
		large: `
			font-family: 'Plus Jakarta Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 23px;
		`,

		medium: `
			font-family: 'Plus Jakarta Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 15px;
			line-height: 19px;
		`,
		small: `
			font-family: 'Plus Jakarta Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 12px;
			line-height: 15px;
			letter-spacing: 2.4px;
			color: #828fa3;
		`,
	},
	text: {
		large: `
			font-family: 'Plus Jakarta Sans';
			font-style: normal;
			font-weight: 500;
			font-size: 13px;
			line-height: 23px;
			color: #2b2c37;
		`,
		medium: `
			font-family: 'Plus Jakarta Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 12px;
			line-height: 15px;
			color: #2b2c37;
		`,
	},
};

export default theme;
