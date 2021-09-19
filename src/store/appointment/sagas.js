import { takeLatest, call, put } from 'redux-saga/effects';
import { getDoctorAppointmentsError, setDoctorAppointments } from './actions';
import { startAction, stopAction } from '../loading/actions';
import { GET_DOCTOR_APPOINTMENTS_REQUEST } from './actionTypes';
import appointmentService from 'services/AppointmentService';

export function* getDoctorAppointments({ type, doctorId }) {
  try {
    yield put(startAction(type));

    const appointments = yield call(
      appointmentService.getDoctorAppointments,
      doctorId
    );

    yield put(setDoctorAppointments(appointments));
  } catch (error) {
    yield put(getDoctorAppointmentsError());
  } finally {
    yield put(stopAction(type));
  }
}

export default function* appointmentsSaga() {
  yield takeLatest(GET_DOCTOR_APPOINTMENTS_REQUEST, getDoctorAppointments);
}
