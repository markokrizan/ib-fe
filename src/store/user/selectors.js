import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import { GET_ALL_USERS_REQUEST, UPDATE_USER_REQUEST } from './actionTypes';

const selectUsers = (state) => state.user || initialState;

const makeSelectAreUsersLoading = () =>
  makeSelectIsLoading(GET_ALL_USERS_REQUEST);

const makeSelectUsers = () =>
  createSelector(selectUsers, (substate) => substate.users);

const makeSelectUser = () =>
  createSelector(selectUsers, (substate) => substate.user);

const makeSelectIsUserUpdatePending = () =>
  makeSelectIsLoading(UPDATE_USER_REQUEST);

export {
  makeSelectAreUsersLoading,
  makeSelectUsers,
  makeSelectUser,
  makeSelectIsUserUpdatePending,
};
