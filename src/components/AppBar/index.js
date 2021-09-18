import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Navbar } from 'react-bootstrap';
import { DOCTORS } from 'routes';

import { useTranslation } from 'react-i18next';
import { DASHBOARD, USER_PROFILE } from 'routes';
import LanguagePicker from 'components/LanguagePicker';
import Link from 'components/Link';

function AppBar({ onLogout, user }) {
  const { t } = useTranslation();

  const userName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Navbar bg="light">
      <Container>
        <Link to={DASHBOARD}>
          <Navbar.Brand>{t('app_bar.link.appName')}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to={DOCTORS}>Doctors</Link>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-3">
            <LanguagePicker />
          </Navbar.Text>
          <Navbar.Text className="me-2">
            {t('app_bar.link.signedIn')}
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <Link to={USER_PROFILE}>{userName}</Link>
          </Navbar.Text>
          <Button onClick={onLogout}>{t('app_bar.link.logout')}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

AppBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AppBar;
