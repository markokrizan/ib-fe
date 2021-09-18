import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import { GET_DOCTORS_REQUEST } from './actionTypes';

const selectDoctors = (state) => state.doctor || initialState;

const makeSelectIsDoctorsLoading = () =>
  makeSelectIsLoading(GET_DOCTORS_REQUEST);

const makeSelectDoctors = () =>
  createSelector(selectDoctors, (substate) => substate.doctors);

const makeSelectDoctorsError = () =>
  createSelector(selectDoctors, (substate) => substate.getDoctorsError);

export {
  makeSelectIsDoctorsLoading,
  makeSelectDoctors,
  makeSelectDoctorsError,
};
