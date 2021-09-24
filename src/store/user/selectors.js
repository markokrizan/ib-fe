import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import { GET_DOCTORS_REQUEST, GET_DOCTOR_REQUEST } from './actionTypes';

const selectDoctors = (state) => state.doctor || initialState;

const makeSelectIsDoctorsLoading = () =>
  makeSelectIsLoading(GET_DOCTORS_REQUEST);

const makeSelectDoctors = () =>
  createSelector(selectDoctors, (substate) => substate.doctors);

const makeSelectDoctorsError = () =>
  createSelector(selectDoctors, (substate) => substate.getDoctorsError);

const makeSelectIsDoctorLoading = () => makeSelectIsLoading(GET_DOCTOR_REQUEST);

const makeSelectDoctor = () =>
  createSelector(selectDoctors, (substate) => substate.doctor);

const makeSelectDoctorError = () =>
  createSelector(selectDoctors, (substate) => substate.getDoctorError);

export {
  makeSelectIsDoctorsLoading,
  makeSelectDoctors,
  makeSelectDoctorsError,
  makeSelectIsDoctorLoading,
  makeSelectDoctor,
  makeSelectDoctorError,
};
