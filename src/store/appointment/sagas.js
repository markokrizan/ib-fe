import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getAppointmentError,
  getDoctorAppointmentsError,
  setAppointment,
  setDoctorAppointments,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import {
  GET_APPOINTMENT_REQUEST,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
} from './actionTypes';
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

export function* getAppointment({ type, appointmentId }) {
  try {
    yield put(startAction(type));

    const appointment = yield call(
      appointmentService.getAppointment,
      appointmentId
    );

    yield put(setAppointment(appointment));
  } catch (error) {
    yield put(getAppointmentError());
  } finally {
    yield put(stopAction(type));
  }
}

export default function* appointmentsSaga() {
  yield takeLatest(GET_DOCTOR_APPOINTMENTS_REQUEST, getDoctorAppointments);
  yield takeLatest(GET_APPOINTMENT_REQUEST, getAppointment);
}
