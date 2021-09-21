import { fork } from 'redux-saga/effects';

import AuthSagas from './auth/sagas';
import ProfileSagas from './profile/sagas';
import DoctorSagas from './doctor/sagas';
import AppointmentSagas from './appointment/sagas';
import PatientSagas from './patient/sagas';

export default function* rootSaga() {
  yield fork(AuthSagas);
  yield fork(ProfileSagas);
  yield fork(DoctorSagas);
  yield fork(AppointmentSagas);
  yield fork(PatientSagas);
}
