import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { makeSelectIsRegisterPending } from 'store/auth/selectors';
import { register } from 'store/auth/actions';
import RegisterForm from './RegisterForm';
import { LOGIN } from 'routes';
import { Container } from 'react-bootstrap';

function RegisterPage() {
  const dispatch = useDispatch();
  const isRegisterPending = useSelector(makeSelectIsRegisterPending());

  const submitRegisterForm = useCallback(
    (...args) => dispatch(register(...args)),
    [dispatch]
  );

  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>Register - React Boilerplate</title>
      </Helmet>
      <Container className="d-flex flex-column align-items-center">
        <h1>{t('register_page.text.register_title')}</h1>

        <RegisterForm
          onSubmit={submitRegisterForm}
          isPending={isRegisterPending}
        />
        <Link to={LOGIN}>{t('register_page.link.login')}</Link>
      </Container>
    </main>
  );
}

export default RegisterPage;
