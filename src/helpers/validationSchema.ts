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

export const taskAddSchema = yup.object().shape({
	title: yup.string().max(20).required(),
	description: yup.string().max(250).required(),
	subtasks: yup.array().of(yup.object().shape({ title: yup.string().max(20).required() })),
	status: yup.string().required(),
});
