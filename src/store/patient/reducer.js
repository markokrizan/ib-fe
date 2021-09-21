import produce from 'immer';
import {
  GET_PATIENT_ERROR,
  GET_PATIENT_REQUEST,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_ERROR,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_SUCCESS,
  GET_PATIENT_SUCCESS,
  UPDATE_PATIENT_MEDICAL_RECORD,
} from './actionTypes';

export const initialState = {
  patient: null,
  medicalRecord: null,
  patientError: null,
  medicalRecordError: null,
};

/* eslint-disable default-case */
const doctorReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PATIENT_REQUEST:
        draft.patientError = false;
        break;
      case GET_PATIENT_SUCCESS:
        draft.patient = action.patient;
        break;
      case GET_PATIENT_ERROR:
        draft.patientError = true;
        break;
      case GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST:
        draft.medicalRecordError = false;
        break;
      case GET_PATIENT_REQUEST_MEDICAL_RECORD_SUCCESS:
        draft.medicalRecord = action.medicalRecord;
        break;
      case GET_PATIENT_REQUEST_MEDICAL_RECORD_ERROR:
        draft.medicalRecordError = true;
        break;
      case UPDATE_PATIENT_MEDICAL_RECORD:
        draft.medicalRecord = action.medicalRecord;
        break;
    }
  });

export default doctorReducer;
