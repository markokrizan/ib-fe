import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
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

export function updateUser(user) {
  return {
    type: UPDATE_USER_REQUEST,
    user,
  };
}

export function setUser(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
}
