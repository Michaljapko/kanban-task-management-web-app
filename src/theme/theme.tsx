const color = {
	mainPurple: 'rgb(100, 96, 199)',
	mainPurpleHover: 'rgb(168, 163, 255)',
	black: 'rgb(0, 1, 20)',
	blackTrans: 'rgba(0, 1, 20, 0.318)',
	veryDarkGray: 'rgb(32, 33, 44)',
	darkGray: 'rgb(43, 44, 54)',
	darkLines: 'rgb(61, 62, 76)',
	mediumGrey: 'rgb(129, 142, 162)',
	lightLines: 'rgb(229, 236, 250)',
	lightGrey: 'rgb(242, 246, 253)',
	white: 'rgb(255, 255, 255)',
	red: 'rgb(234,85,85)',
	redHover: 'rgb(255,152,152)',
};

export const theme = {
	mainColor: color.mainPurple,
	backgroundBack: color.blackTrans,
	textGrey: color.mediumGrey,
	colorError: color.red,
	buttonText: color.white,
	buttonPrimary: color.mainPurple,
	buttonPrimaryHover: color.mainPurpleHover,
	buttonDestructive: color.red,
	buttonDestructiveHover: color.redHover,

	themeLight: {
		backgroundMain: color.white,
		backgroundBody: color.lightLines,
		mainColor: color.black,
		buttonSecondary: color.lightGrey,
	},
	themeDark: {
		backgroundMain: color.veryDarkGray,
		backgroundBody: color.black,
		mainColor: color.white,
		buttonSecondary: color.white,
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
			font-weight: 700;
			font-size: 12px;
			line-height: 15px;
			color: #2b2c37;
		`,
	},
};

export default theme;
