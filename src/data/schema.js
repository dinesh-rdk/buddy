import * as yup from 'yup';

const userSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid Email')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .min(10, 'Phone number is not valid')
    .max(10, 'Phone number is not valid')
    .matches(/^\d+$/, 'Phone number is not valid'),
  work: yup.string(),
  city: yup.string(),
});

export { userSchema };
