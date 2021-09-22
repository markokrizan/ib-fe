import Yup from 'utils/validations';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('global.validations.required'),
  lastName: Yup.string().required('global.validations.required'),
  email: Yup.string()
    .email('global.validations.email')
    .required('global.validations.required'),
  username: Yup.string().required('global.validations.required'),
  address: Yup.string().required('global.validations.required'),
  phoneNumber: Yup.string().required('global.validations.required'),
  insuranceNumber: Yup.string().required('global.validations.required'),
  password: Yup.string().required('global.validations.required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'global.validations.passwordMatch')
    .required('global.validations.required'),
});
