import * as yup from 'yup';

yup.setLocale({
	mixed: {
		required: "Can't by empty",
	},
	string: {
		max: 'Too long',
	},
});

export const boardAddSchema = yup.object().shape({
	name: yup.string().max(20).required(),
	columns: yup
		.array()
		.of(yup.object().shape({ name: yup.string().max(40).required() })),
});

export const taskAddSchema = yup.object().shape({
	title: yup.string().max(20).required(),
	description: yup.string().max(250).required(),
	subtasks: yup
		.array()
		.of(yup.object().shape({ title: yup.string().max(40).required() })),
	status: yup.string().required(),
});
