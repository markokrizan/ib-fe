import { takeLatest, call, put } from 'redux-saga/effects';
import {
  bookAppointmentError,
  getAppointmentError,
  getDoctorAppointmentsError,
  setAppointment,
  setDoctorAppointments,
  updateDoctorAppointment,
  saveAppointmentError,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import {
  BOOK_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_REQUEST,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
  SAVE_APPOINTMENT,
} from './actionTypes';
import appointmentService from 'services/AppointmentService';
import { showApiErrorSnack } from 'utils/snack';

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
    yield put(showApiErrorSnack(error));
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
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export function* bookAppointment({ type, appointment, patient }) {
  try {
    yield put(startAction(type));

    const bookedAppointment = yield call(appointmentService.bookAppointment, {
      appointment: {
        id: appointment.id,
      },
      patient: {
        id: patient.id,
      },
    });

    yield put(updateDoctorAppointment(bookedAppointment));
  } catch (error) {
    yield put(bookAppointmentError());
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export function* saveAppointment({ type, appointment }) {
  try {
    yield put(startAction(type));

    const bookedAppointment = yield call(
      appointmentService.saveAppointment,
      appointment
    );

    yield put(updateDoctorAppointment(bookedAppointment));
  } catch (error) {
    yield put(saveAppointmentError());
    yield put(showApiErrorSnack(error));
  } finally {
    yield put(stopAction(type));
  }
}

export default function* appointmentsSaga() {
  yield takeLatest(GET_DOCTOR_APPOINTMENTS_REQUEST, getDoctorAppointments);
  yield takeLatest(GET_APPOINTMENT_REQUEST, getAppointment);
  yield takeLatest(BOOK_APPOINTMENT_REQUEST, bookAppointment);
  yield takeLatest(SAVE_APPOINTMENT, saveAppointment);
}
