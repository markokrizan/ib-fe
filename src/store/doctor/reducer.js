import produce from 'immer';
import {
  GET_DOCTORS_ERROR,
  GET_DOCTORS_REQUEST,
  GET_DOCTORS_SUCCESS,
  GET_DOCTOR_ERROR,
  GET_DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
} from './actionTypes';

export const initialState = {
  doctors: [],
  getDoctorsError: null,
  doctor: null,
  getDoctorErorr: null,
};

/* eslint-disable default-case */
const doctorReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_DOCTORS_REQUEST:
        draft.getDoctorsError = false;
        break;
      case GET_DOCTORS_SUCCESS:
        draft.doctors = action.doctors;
        break;
      case GET_DOCTORS_ERROR:
        draft.getDoctorsError = true;
      case GET_DOCTOR_REQUEST:
        draft.getDoctorError = false;
        break;
      case GET_DOCTOR_SUCCESS:
        draft.doctor = action.doctor;
        break;
      case GET_DOCTOR_ERROR:
        draft.getDoctorError = true;
    }
  });

export default doctorReducer;
