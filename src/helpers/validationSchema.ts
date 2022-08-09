import * as yup from 'yup';

yup.setLocale({
	mixed: {
		required: "Can't by empty",
	},
});

export const boardAddSchema = yup.object().shape({
	name: yup.string().max(20).required(),
	columns: yup.array().of(yup.object().shape({ name: yup.string().max(20).required() })),
});
