import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
	mainPurple: 'rgb(100, 96, 199)',
	purpleLighter: 'rgba(99, 96, 199, 0.25)',
	mainPurpleHover: 'rgb(168, 163, 255)',
	black: 'rgb(0, 1, 20)',
	blackTrans: 'rgba(0, 1, 20, 0.318)',
	veryDarkGray: 'rgb(32, 33, 44)',
	darkGray: 'rgb(43, 44, 55)',
	darkLines: 'rgb(61, 62, 76)',
	mediumGrey: 'rgb(129, 142, 162)',
	lightLines: 'rgb(229, 236, 250)',
	lightGrey: 'rgb(244, 247, 253)',
	white: 'rgb(255, 255, 255)',
	red: 'rgb(234,85,85)',
	redHover: 'rgb(255,152,152)',
	transparentGray: 'rgba(130, 143, 163, 0.25)',
};

export const theme = {
	themeColor: colors.mainPurple,
	textGrey: colors.mediumGrey,
	colorError: colors.red,
	buttonText: colors.white,
	buttonPrimary: colors.mainPurple,
	buttonPrimaryHover: colors.mainPurpleHover,
	buttonSecondaryHover: colors.purpleLighter,
	buttonDestructive: colors.red,
	buttonDestructiveHover: colors.redHover,
	backgroundBack: colors.blackTrans,
	backgroundMain: colors.white,
	backgroundBody: colors.lightLines,
	backgroundContrast: colors.lightGrey,
	mainColor: colors.black,
	buttonSecondary: colors.lightGrey,
	borderGray: colors.transparentGray,

	themeDark: {
		buttonSecondaryHover: colors.white,
		backgroundBody: colors.veryDarkGray,
		backgroundMain: colors.darkGray,
		backgroundContrast: colors.veryDarkGray,
		mainColor: colors.white,
		buttonSecondary: colors.white,
	},
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
			font-weight: 500;
			font-size: 12px;
			line-height: 15px;
			color: #2b2c37;
		`,
	},
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
