import produce from 'immer';
import {
  GET_APPOINTMENT_ERROR,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
  GET_DOCTOR_APPOINTMENTS_ERROR,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
  GET_DOCTOR_APPOINTMENTS_SUCCESS,
  UPDATE_DOCTOR_APPOINTMENT,
} from './actionTypes';

export const initialState = {
  doctorAppointments: [],
  doctorAppointmentsError: null,
  appointment: null,
  appointmentError: null,
  appointmentBookError: null,
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
      case UPDATE_DOCTOR_APPOINTMENT:
        draft.doctorAppointments.content = draft.doctorAppointments.content.map(
          (appointment) => {
            if (appointment.id !== action.appointment.id) {
              return appointment;
            }

            return action.appointment;
          }
        );
        break;
      case GET_DOCTOR_APPOINTMENTS_ERROR:
        draft.doctorAppointmentsError = true;
        break;
      case GET_APPOINTMENT_REQUEST:
        draft.appointmentError = false;
        break;
      case GET_APPOINTMENT_SUCCESS:
        draft.appointment = action.appointment;
        break;
      case GET_APPOINTMENT_ERROR:
        draft.appointmentError = true;
        break;
    }
  });

export default doctorReducer;
