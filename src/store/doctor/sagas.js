import { takeLatest, call, put } from 'redux-saga/effects';
import { getDoctorsError, setDoctors } from './actions';
import { startAction, stopAction } from '../loading/actions';
import { GET_DOCTORS_REQUEST } from './actionTypes';
import doctorService from 'services/DoctorService';

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

export default function* userProfileSaga() {
  yield takeLatest(GET_DOCTORS_REQUEST, getDoctors);
}
