import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/user/actions';
import { makeSelectUsers } from 'store/user/selectors';
import { formatRoles, getUserFullName } from 'utils/user';
import Link from 'components/Link';
import User from 'containers/User/Loadable';

const Users = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={UserTable} />
      <Route path={`${path}/:id`} component={User} />
    </Switch>
  );
};

const UserTable = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { path } = useRouteMatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector(makeSelectUsers());

  const Rows = () => {
    if (!users.content?.length) {
      return null;
    }

    return users.content.map((user) => {
      const roles = formatRoles(user);
      const activeStatus = user.isVerified ? t('common.yes') : t('common.no');
      const userLink = `${path}/${user.id}`;

      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>
            <Link to={userLink}>{getUserFullName(user)}</Link>
          </td>
          <td>{user.email}</td>
          <td>{roles}</td>
          <td>{activeStatus}</td>
        </tr>
      );
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{t('users.id')}</th>
          <th>{t('users.fullName')}</th>
          <th>{t('users.email')}</th>
          <th>{t('users.roles')}</th>
          <th>{t('users.verified')}</th>
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </Table>
  );
};

export default Users;
