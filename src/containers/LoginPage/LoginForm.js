import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from './validations';

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
      <Form>
        <div>
          <label htmlFor="username">
            {t('login_page.input_label.username')}
          </label>
          <Field type="text" name="username" required autoFocus />
          <ErrorMessage name="username">
            {(msg) =>
              t(msg, {
                label: t('login_page.input_label.email'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="password">
            {t('login_page.input_label.password')}
          </label>
          <Field type="password" name="password" required />
          <ErrorMessage name="password">
            {(msg) =>
              t(msg, {
                label: t('login_page.input_label.password'),
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {t('login_page.button.login')}
        </button>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
