import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { makeSelectIsChangePasswordPending } from 'store/profile/selectors';
import { changePassword } from 'store/profile/actions';
import ChangePasswordForm from './ChangePasswordForm';

function UserProfilePage() {
  const dispatch = useDispatch();
  const isChangePasswordPending = useSelector(
    makeSelectIsChangePasswordPending()
  );
  const submitChangePasswordForm = useCallback(
    (...args) => dispatch(changePassword(...args)),
    [dispatch]
  );

  return (
    <main>
      <Helmet>
        <title>Profile - React Boilerplate</title>
      </Helmet>
      <ChangePasswordForm
        isPending={isChangePasswordPending}
        onSubmit={submitChangePasswordForm}
      />
    </main>
  );
}

export default UserProfilePage;
