import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { loginSchema } from './validations';
import { Button } from 'react-bootstrap';
import Input from 'components/Input';

export default function LoginForm({ onSubmit, isPending }) {
  const handleOnSubmit = (values) => {
    const { username, password } = values;
    onSubmit(username, password);
  };

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleOnSubmit}
    >
      <Form className="d-flex flex-column w-25">
        <Input
          type="text"
          name="username"
          label="Username"
          placeholder="Username"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />
        <Button disabled={isPending} type="submit">
          {t('login_page.button.login')}
        </Button>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
