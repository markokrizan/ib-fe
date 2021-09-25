import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  fetchAuthenticatedUser,
  fetchAuthenticatedUserSuccess,
  logoutSuccess,
  loginSuccess,
  loginError,
  setToken,
  forgotPasswordSuccess,
  forgotPasswordError,
  registerSuccess,
  registerError,
  resetPasswordSuccess,
  resetPasswordError,
  socialAuthSuccess,
  socialAuthError,
  setRoles,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import { enqueueSnackbar } from '../notifier/actions';
import {
  LOGIN_REQUEST,
  FETCH_AUTHENTICATED_USER_REQUEST,
  LOGOUT_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  REGISTER_REQUEST,
  RESET_PASSWORD_REQUEST,
  SOCIAL_AUTH_REQUEST,
  GET_ALL_ROLES_REQUEST,
} from './actionTypes';
import { DASHBOARD, LOGIN } from 'routes';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';
import authService from 'services/AuthService';
import { HTTP_STATUS_CODES } from 'consts';
import { showApiErrorSnack } from 'utils/snack';

const getRouterLocationSearch = (state) => state.router.location.search;

export function* authorize({ type, username, password }) {
  try {
    yield put(startAction(type));
    const token = yield call(authService.login, { username, password });
    yield put(loginSuccess());
    yield put(setToken(token));
    yield put(push(DASHBOARD));
  } catch (error) {
    yield put(loginError());
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export function* fetchUser({ type }) {
  yield put(startAction(type));
  try {
    const user = yield call(authService.fetchAuthenticatedUser);
    yield put(fetchAuthenticatedUserSuccess(user));
  } catch (error) {
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export function* logout() {
  try {
    yield call(authService.logout);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(showApiErrorSnack(error));
  }
}

export function* forgotPassword({ type, email, meta: { setErrors } }) {
  yield put(startAction(type));
  try {
    yield call(authService.forgotPassword, { email });
    yield put(forgotPasswordSuccess());
    yield put(
      enqueueSnackbar({
        message: 'forgot_password_page.notifications.reset_link_sent',
      })
    );
  } catch (error) {
    if (error.status === HTTP_STATUS_CODES.VALIDATION_FAILED) {
      yield call(setErrors, error.data.errors);
    }
    yield put(forgotPasswordError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* register({ type, data, meta: { setErrors } }) {
  try {
    yield put(startAction(type));
    yield call(authService.register, data);
    yield put(registerSuccess());
    yield put(push(LOGIN));
  } catch (error) {
    if (error.status === HTTP_STATUS_CODES.VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.erorrs));
    } else {
      yield put(showApiErrorSnack(error));
    }
    yield put(registerError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* resetPassword({
  type,
  password,
  passwordConfirmation,
  meta: { setErrors },
}) {
  try {
    yield put(startAction(type));

    const search = yield select(getRouterLocationSearch);
    const params = new URLSearchParams(search);
    const token = params.get('forgot_password_token');
    yield call(authService.resetPassword, {
      token,
      password,
      password_confirmation: passwordConfirmation,
    });
    yield put(resetPasswordSuccess());
    yield put(
      enqueueSnackbar({
        message: 'reset_password_page.notifications.password_reseted',
      })
    );
    yield put(push(LOGIN));
  } catch (error) {
    yield put(resetPasswordError());
    if (error.status === HTTP_STATUS_CODES.VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
    } else {
      yield put(showApiErrorSnack(error));
    }
    yield put(resetPasswordError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* socialAuthentication({ type, accessToken, provider }) {
  try {
    yield put(startAction(type));
    const { accessToken: token } = yield call(
      authService.socialAuth,
      provider,
      {
        accessToken,
      }
    );
    yield put(setToken(token));
    yield put(socialAuthSuccess());
    yield put(fetchAuthenticatedUser());
    yield put(push(DASHBOARD));
  } catch (error) {
    yield put(socialAuthError(error.data));
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export function* getAllRoles({ type }) {
  try {
    yield put(startAction(type));

    const roles = yield call(authService.getAllRoles);
    const rolesArray = Array.isArray(roles)
      ? roles
      : Object.keys(roles).map((key) => roles[key]);

    yield put(setRoles(rolesArray));
  } catch (error) {
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, authorize);
  yield takeLatest(FETCH_AUTHENTICATED_USER_REQUEST, fetchUser);
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
  yield takeLatest(SOCIAL_AUTH_REQUEST, socialAuthentication);
  yield takeLatest(GET_ALL_ROLES_REQUEST, getAllRoles);
}
