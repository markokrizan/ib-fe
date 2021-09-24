import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Navbar } from 'react-bootstrap';
import { DOCTORS, USERS } from 'routes';

import { useTranslation } from 'react-i18next';
import { DASHBOARD, USER_PROFILE } from 'routes';
import LanguagePicker from 'components/LanguagePicker';
import Link from 'components/Link';
import { formatRoles, userHasRoles } from 'utils/user';
import { ROLE_ADMIN } from 'utils/constants';

function AppBar({ onLogout, user }) {
  const { t } = useTranslation();

  const userName = `${user?.firstName} ${user?.lastName}`;
  const roles = formatRoles(user);
  const isAdmin = userHasRoles(user, [ROLE_ADMIN]);

  return (
    <Navbar bg="light">
      <Container className="d-flex align-items-baseline" fluid>
        <Link to={DASHBOARD}>
          <Navbar.Brand className="me-4 fw-bold">
            {t('app_bar.link.appName')}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to={DOCTORS} className="me-3" showActiveStyle>
          Doctors
        </Link>
        {isAdmin && (
          <Link to={USERS} className="me-3" showActiveStyle>
            Users
          </Link>
        )}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-3">
            <LanguagePicker />
          </Navbar.Text>
          <Navbar.Text className="me-2">
            {t('app_bar.link.signedIn')}
          </Navbar.Text>
          <Navbar.Text className="me-3">
            <Link to={USER_PROFILE}>
              {userName} ({roles})
            </Link>
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
