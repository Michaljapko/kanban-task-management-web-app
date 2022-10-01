import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: "Can't by empty",
  },
  string: {
    max: 'Too long',
  },
});
