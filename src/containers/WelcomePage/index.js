import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LOGIN, REGISTER } from 'routes';

function WelcomePage() {
  const { t } = useTranslation();

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center h-100"
    >
      <Helmet>
        <title>Clinic app</title>
      </Helmet>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>{t('welcome_page.heading')}</h1>
        <h2>{t('welcome_page.subheading')}</h2>

        <Link to={LOGIN}>{t('welcome_page.link.login')}</Link>
        <Link to={REGISTER}>{t('welcome_page.link.register')}</Link>
      </div>
    </Container>
  );
}

export default WelcomePage;
