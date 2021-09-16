import Yup from 'utils/validations';

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('global.validations.required'),
  password: Yup.string().required('global.validations.required'),
});
