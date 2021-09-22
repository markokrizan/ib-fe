import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { registerSchema } from './validations';
import Input from 'components/Input';
import { Button, Container } from 'react-bootstrap';

export default function RegisterForm({ onSubmit, isPending }) {
  const { t } = useTranslation();

  const handleOnSubmit = (values, setErrors) => {
    onSubmit(values, setErrors);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        username: '',
        address: '',
        phoneNumber: '',
        insuranceNumber: '',
      }}
      validationSchema={registerSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className="d-flex flex-column align-items-center">
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
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
            />
            <Input
              type="password"
              name="passwordConfirmation"
              label="Repeat password"
              placeholder="Password"
            />
          </Container>
        </Container>

        <Button disabled={isPending} type="submit" className="mb-3 w-25">
          {t('register_page.button.register')}
        </Button>
      </Form>
    </Formik>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
