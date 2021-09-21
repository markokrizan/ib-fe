import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import {
  GET_PATIENT_REQUEST,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST,
} from './actionTypes';

const selectPatient = (state) => state.patient || initialState;

const makeSelectIsPatientLoading = () =>
  makeSelectIsLoading(GET_PATIENT_REQUEST);

const makeSelectPatientErrorr = () =>
  createSelector(selectPatient, (substate) => substate.patientError);

const makeSelectPatient = () =>
  createSelector(selectPatient, (substate) => substate.patient);

const makeSelectIsMedicalRecordLoading = () =>
  makeSelectIsLoading(GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST);

const makeSelectMedicalRecordError = () =>
  createSelector(selectPatient, (substate) => substate.medicalRecordError);

const makeSelectMedicalRecord = () =>
  createSelector(selectPatient, (substate) => substate.medicalRecord);

export {
  makeSelectIsPatientLoading,
  makeSelectPatientErrorr,
  makeSelectPatient,
  makeSelectIsMedicalRecordLoading,
  makeSelectMedicalRecordError,
  makeSelectMedicalRecord,
};
