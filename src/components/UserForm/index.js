import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { Formik } from 'formik';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'store/user/actions';
import { makeSelectIsUserUpdatePending } from 'store/user/selectors';
import Yup from 'utils/validations';

export const userSchema = Yup.object().shape({
  firstName: Yup.string().required('global.validations.required'),
  lastName: Yup.string().required('global.validations.required'),
  email: Yup.string()
    .email('global.validations.email')
    .required('global.validations.required'),
  username: Yup.string().required('global.validations.required'),
  address: Yup.string().required('global.validations.required'),
  phoneNumber: Yup.string().required('global.validations.required'),
  insuranceNumber: Yup.string().required('global.validations.required'),
});

const UserForm = ({ user }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isUpdatePending = useSelector(makeSelectIsUserUpdatePending());

  const handleOnSubmit = (values, setErrors) => {
    dispatch(updateUser(values, setErrors));
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        address: '',
        phoneNumber: '',
        insuranceNumber: '',
        isVerified: false,
        ...user,
      }}
      validationSchema={userSchema}
      onSubmit={handleOnSubmit}
      enableReinitialize={true}
    >
      {(form) => (
        <Form
          onSubmit={form.handleSubmit}
          className="d-flex flex-column align-items-center"
        >
          <Container className="d-flex mt-3">
            <Container>
              <Input
                type="text"
                name="firstName"
                label="First name"
                placeholder="First name"
              />
              <Input
                type="text"
                name="lastName"
                label="Last name"
                placeholder="Last name"
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
              />
            </Container>
            <Container>
              <Input
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
              />
              <Input
                type="text"
                name="address"
                label="Address"
                placeholder="Address"
              />
              <Input
                type="text"
                name="phoneNumber"
                label="Phone number"
                placeholder="Phone number"
              />
            </Container>
            <Container>
              <Input
                type="text"
                name="insuranceNumber"
                label="Insurance number"
                placeholder="Insurance number"
              />
              <Checkbox
                name="isVerified"
                label="Is verified"
                placeholder="Insurance number"
              />
            </Container>
          </Container>

          <Button
            disabled={isUpdatePending}
            type="submit"
            className="mb-3 w-25"
          >
            {t('common.save')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default UserForm;
