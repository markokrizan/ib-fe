import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import { GET_DOCTOR_APPOINTMENTS_REQUEST } from './actionTypes';

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

export {
  makeSelectAreDoctorsAppointmentsLoading,
  makeSelectDoctorsAppointments,
  makeSelectDoctorsAppointmentsError,
};
