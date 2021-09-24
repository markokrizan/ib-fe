import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './actionTypes';

export function changePassword(
  currentPassword,
  newPassword,
  newPasswordConfirmation,
  setErrors,
  resetForm
) {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    currentPassword,
    newPassword,
    newPasswordConfirmation,
    meta: {
      setErrors,
      resetForm,
    },
  };
}

export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
}

export function changePasswordError() {
  return {
    type: CHANGE_PASSWORD_ERROR,
  };
}
