import { takeLatest, call, put } from 'redux-saga/effects';
import { setUser, setUsers } from './actions';
import { startAction, stopAction } from '../loading/actions';
import { GET_ALL_USERS_REQUEST, UPDATE_USER_REQUEST } from './actionTypes';
import userService from 'services/UserService';
import { showApiErrorSnack } from 'utils/snack';
import { enqueueSnackbar } from 'store/notifier/actions';
import { HTTP_STATUS_CODES } from 'consts';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';

export function* getUsers({ type }) {
  try {
    yield put(startAction(type));

    const users = yield call(userService.getUsers);

    yield put(setUsers(users));
  } catch (error) {
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export function* updateUser({ type, user, meta: { setErrors } }) {
  try {
    yield put(startAction(type));

    const updatedUser = yield call(userService.updateUser, user);

    yield put(setUser(updatedUser));

    yield put(
      enqueueSnackbar({
        message: 'users.updateSuccessful',
      })
    );
  } catch (error) {
    if (error.status === HTTP_STATUS_CODES.VALIDATION_FAILED) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
      return;
    }

    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(GET_ALL_USERS_REQUEST, getUsers);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}
