import {
  GET_DOCTORS_ERROR,
  GET_DOCTORS_REQUEST,
  GET_DOCTORS_SUCCESS,
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
