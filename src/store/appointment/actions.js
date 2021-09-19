import {
  GET_APPOINTMENT_ERROR,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
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
