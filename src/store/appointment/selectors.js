import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import {
  BOOK_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_REQUEST,
  GET_DOCTOR_APPOINTMENTS_REQUEST,
  SAVE_APPOINTMENT,
} from './actionTypes';
import { SAVE_MEDICAL_RECORD } from 'store/patient/actionTypes';

const selectAppointments = (state) => state.appointments || initialState;

const makeSelectAreDoctorsAppointmentsLoading = () =>
  makeSelectIsLoading(GET_DOCTOR_APPOINTMENTS_REQUEST);

const makeSelectDoctorsAppointments = () =>
  createSelector(selectAppointments, (substate) => substate.doctorAppointments);

const makeSelectDoctorsAppointmentsError = () =>
  createSelector(
    selectAppointments,
    (substate) => substate.doctorAppointmentsError
  );

const makeSelectIsAppointmentLoading = () =>
  makeSelectIsLoading(GET_APPOINTMENT_REQUEST);

const makeSelectIsAppointmentBookLoading = () =>
  makeSelectIsLoading(BOOK_APPOINTMENT_REQUEST);

const makeSelectIsAppointmentSaveLoading = () =>
  makeSelectIsLoading(SAVE_APPOINTMENT);

const makeSelectIsMedicalRecordSaveLoading = () =>
  makeSelectIsLoading(SAVE_MEDICAL_RECORD);

const makeSelectAppointment = () =>
  createSelector(selectAppointments, (substate) => substate.appointment);

const makeSelectAppointmentError = () =>
  createSelector(selectAppointments, (substate) => substate.appointmentError);

export {
  makeSelectAreDoctorsAppointmentsLoading,
  makeSelectDoctorsAppointments,
  makeSelectDoctorsAppointmentsError,
  makeSelectIsAppointmentLoading,
  makeSelectAppointment,
  makeSelectAppointmentError,
  makeSelectIsAppointmentBookLoading,
  makeSelectIsAppointmentSaveLoading,
  makeSelectIsMedicalRecordSaveLoading,
};
