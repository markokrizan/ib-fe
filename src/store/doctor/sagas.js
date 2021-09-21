import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getDoctorError,
  getDoctorsError,
  setDoctor,
  setDoctors,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import { GET_DOCTORS_REQUEST, GET_DOCTOR_REQUEST } from './actionTypes';
import doctorService from 'services/DoctorService';
import userService from 'services/UserService';

export function* getDoctors({ type }) {
  try {
    yield put(startAction(type));

    const doctors = yield call(doctorService.getDoctors);

    yield put(setDoctors(doctors));
  } catch (error) {
    yield put(getDoctorsError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* getDoctor({ type, id }) {
  try {
    yield put(startAction(type));

    const doctor = yield call(userService.getUser, id);

    yield put(setDoctor(doctor));
  } catch (error) {
    yield put(getDoctorError());
  } finally {
    yield put(stopAction(type));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(GET_DOCTORS_REQUEST, getDoctors);
  yield takeLatest(GET_DOCTOR_REQUEST, getDoctor);
}
