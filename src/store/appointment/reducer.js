import produce from 'immer';
import {
  GET_DOCTOR_APPOINTMENTS_ERROR,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
  GET_DOCTOR_APPOINTMENTS_SUCCESS,
} from './actionTypes';

export const initialState = {
  doctorAppointments: [],
  doctorAppointmentsError: null,
};

/* eslint-disable default-case */
const doctorReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_DOCTOR_APPOINTMENTS_REQUEST:
        draft.doctorAppointmentsError = false;
        break;
      case GET_DOCTOR_APPOINTMENTS_SUCCESS:
        draft.doctorAppointments = action.appointments;
        break;
      case GET_DOCTOR_APPOINTMENTS_ERROR:
        draft.doctorAppointmentsError = true;
        break;
    }
  });

export default doctorReducer;
