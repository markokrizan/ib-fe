import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import PublicRoute from 'containers/PublicRoute';
import WelcomePage from 'containers/WelcomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import UserProfilePage from 'containers/UserProfilePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ResetPasswordPage from 'containers/ResetPasswordPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MedicalRecord from 'containers/MedicalRecord/Loadable';
import Users from 'containers/Users/Loadable';
import {
  WELCOME,
  DASHBOARD,
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  USER_PROFILE,
  PATIENT_MEDICAL_RECORD,
  USERS,
} from 'routes';
import { ROLE_ADMIN } from 'utils/constants';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute exact path={WELCOME} component={WelcomePage} />
      <PrivateRoute
        path={USERS}
        rolesAllowed={[ROLE_ADMIN]}
        component={Users}
      />
      <PrivateRoute path={DASHBOARD} component={Dashboard} />
      <PrivateRoute path={PATIENT_MEDICAL_RECORD} component={MedicalRecord} />
      <PrivateRoute exact path={USER_PROFILE} component={UserProfilePage} />
      <PublicRoute exact path={LOGIN} component={LoginPage} />
      <PublicRoute exact path={REGISTER} component={RegisterPage} />
      <PublicRoute
        exact
        path={FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <PublicRoute exact path={RESET_PASSWORD} component={ResetPasswordPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
