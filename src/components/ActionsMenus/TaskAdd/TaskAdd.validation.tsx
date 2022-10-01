import * as yup from 'yup';

export const taskAddSchema = yup.object().shape({
  title: yup.string().max(100).required(),
  description: yup.string().max(450).required(),
  subtasks: yup.array().of(yup.object().shape({ title: yup.string().max(300).required() })),
  status: yup.string().required(),
});
