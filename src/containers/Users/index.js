import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/user/actions';
import { makeSelectUsers } from 'store/user/selectors';
import { formatRoles, getUserFullName } from 'utils/user';

const Users = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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

      return (
        <tr>
          <td>{user.id}</td>
          <td>{getUserFullName(user)}</td>
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
