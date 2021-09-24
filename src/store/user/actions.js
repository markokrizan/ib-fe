import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from './actionTypes';

export function getUsers() {
  return {
    type: GET_ALL_USERS_REQUEST,
  };
}

export function setUsers(users) {
  return {
    type: GET_ALL_USERS_SUCCESS,
    users,
  };
}

export function getUser(userId) {
  return {
    type: GET_USER_REQUEST,
    userId,
  };
}

export function setSingleUser(user) {
  return {
    type: GET_USER_SUCCESS,
    user,
  };
}

export function updateUser(user, setErrors) {
  return {
    type: UPDATE_USER_REQUEST,
    user,
    meta: {
      setErrors,
    },
  };
}

export function setUser(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
}
