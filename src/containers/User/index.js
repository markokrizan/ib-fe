import UserForm from 'components/UserForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { makeSelectUser } from 'store/user/selectors';
import { getUser } from 'store/user/actions';

export const User = () => {
  const { id: userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  const user = useSelector(makeSelectUser());

  if (!user) {
    return null;
  }

  return <UserForm user={user} />;
};

export default User;
