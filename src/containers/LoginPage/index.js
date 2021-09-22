import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  makeSelectIsLoginPending,
  makeSelectIsSocialAuthPending,
} from 'store/auth/selectors';
import { login } from 'store/auth/actions';
import LoginForm from './LoginForm';
import { REGISTER } from 'routes';

function LoginPage() {
  const dispatch = useDispatch();
  const isLoginPending = useSelector(makeSelectIsLoginPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitLoginForm = useCallback((...args) => dispatch(login(...args)), [
    dispatch,
  ]);

  const { t } = useTranslation();

  const renderPendingIndicator = <div>Please wait...</div>;

  return (
    <main className="h-100">
      <Helmet>
        <title>Login - React Boilerplate</title>
      </Helmet>
      {!isSocialAuthPending ? (
        <Container className="d-flex flex-column align-items-center">
          <h1>{t('login_page.text.login_title')}</h1>
          <LoginForm onSubmit={submitLoginForm} isPending={isLoginPending} />
          <div className="mt-3">
            <br />
            <Link to={REGISTER}>{t('login_page.link.register')}</Link>
          </div>
        </Container>
      ) : (
        renderPendingIndicator
      )}
    </main>
  );
}

export default LoginPage;
