import {
  GET_DOCTOR_APPOINTMENTS_ERROR,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
  GET_DOCTOR_APPOINTMENTS_SUCCESS,
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
