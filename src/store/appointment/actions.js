import {
  BOOK_APPOINTMENT_ERROR,
  BOOK_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_ERROR,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
  GET_DOCTOR_APPOINTMENTS_ERROR,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
  GET_DOCTOR_APPOINTMENTS_SUCCESS,
  SAVE_APPOINTMENT,
  SAVE_APPOINTMENT_ERROR,
  UPDATE_DOCTOR_APPOINTMENT,
  ADD_DOCTOR_APPOINTMENT,
} from './actionTypes';

export function getDoctorAppointments(doctorId) {
  return {
    type: GET_DOCTOR_APPOINTMENTS_REQUEST,
    doctorId,
  };
}

export function setDoctorAppointments(appointments) {
  return {
    type: GET_DOCTOR_APPOINTMENTS_SUCCESS,
    appointments,
  };
}

export function getDoctorAppointmentsError() {
  return {
    type: GET_DOCTOR_APPOINTMENTS_ERROR,
  };
}

export function getAppointment(appointmentId) {
  return {
    type: GET_APPOINTMENT_REQUEST,
    appointmentId,
  };
}

export function setAppointment(appointment) {
  return {
    type: GET_APPOINTMENT_SUCCESS,
    appointment,
  };
}

export function getAppointmentError() {
  return {
    type: GET_APPOINTMENT_ERROR,
  };
}

export function bookAppointment({ appointment, patient }) {
  return {
    type: BOOK_APPOINTMENT_REQUEST,
    appointment,
    patient,
  };
}

export function updateDoctorAppointment(appointment) {
  return {
    type: UPDATE_DOCTOR_APPOINTMENT,
    appointment,
  };
}

export function addDoctorAppointment(appointment) {
  return {
    type: ADD_DOCTOR_APPOINTMENT,
    appointment,
  };
}

export function bookAppointmentError() {
  return {
    type: BOOK_APPOINTMENT_ERROR,
  };
}

export function saveAppointment(appointment) {
  return {
    type: SAVE_APPOINTMENT,
    appointment,
  };
}

export function saveAppointmentError() {
  return {
    type: SAVE_APPOINTMENT_ERROR,
  };
}
