import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectIsAuthenticated,
  makeSelectUser,
} from 'store/auth/selectors';
import { userHasRoles } from 'utils/user';

export function PrivateRoute({
  component: Component,
  isAuthenticated,
  rolesAllowed = [],
  user,
  ...rest
}) {
  const canAccess = () => {
    if (!isAuthenticated) {
      return false;
    }

    if (!rolesAllowed?.length) {
      return true;
    }

    return userHasRoles(user, rolesAllowed);
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        canAccess() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PrivateRoute);
