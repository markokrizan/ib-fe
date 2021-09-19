import {
  GET_DOCTORS_ERROR,
  GET_DOCTORS_REQUEST,
  GET_DOCTORS_SUCCESS,
  GET_DOCTOR_ERROR,
  GET_DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
} from './actionTypes';

export function getDoctors() {
  return {
    type: GET_DOCTORS_REQUEST,
  };
}

export function setDoctors(doctors) {
  return {
    type: GET_DOCTORS_SUCCESS,
    doctors,
  };
}

export function getDoctorsError() {
  return {
    type: GET_DOCTORS_ERROR,
  };
}

export function getDoctor(id) {
  return {
    type: GET_DOCTOR_REQUEST,
    id,
  };
}

export function setDoctor(doctor) {
  return {
    type: GET_DOCTOR_SUCCESS,
    doctor,
  };
}

export function getDoctorError() {
  return {
    type: GET_DOCTOR_ERROR,
  };
}
