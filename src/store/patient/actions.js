import {
  GET_PATIENT_ERROR,
  GET_PATIENT_REQUEST,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_ERROR,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_SUCCESS,
  GET_PATIENT_SUCCESS,
  SAVE_MEDICAL_RECORD,
  SAVE_MEDICAL_RECORD_ERROR,
  UPDATE_PATIENT_MEDICAL_RECORD,
} from './actionTypes';

export function getPatient(patientId) {
  return {
    type: GET_PATIENT_REQUEST,
    patientId,
  };
}

export function setPatient(patient) {
  return {
    type: GET_PATIENT_SUCCESS,
    patient,
  };
}

export function getPatientError() {
  return {
    type: GET_PATIENT_ERROR,
  };
}

export function getPatientMedicalRecord(patientId) {
  return {
    type: GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST,
    patientId,
  };
}

export function setPatientMedicalRecord(medicalRecord) {
  return {
    type: GET_PATIENT_REQUEST_MEDICAL_RECORD_SUCCESS,
    medicalRecord,
  };
}

export function getPatientMedicalRecordError() {
  return {
    type: GET_PATIENT_REQUEST_MEDICAL_RECORD_ERROR,
  };
}

export function saveMedicalRecord(patientId, medicalRecord) {
  return {
    type: SAVE_MEDICAL_RECORD,
    patientId,
    medicalRecord,
  };
}

export function saveMedicalRecordError() {
  return {
    type: SAVE_MEDICAL_RECORD_ERROR,
  };
}

export function updatePatientMedicalRecord(medicalRecord) {
  return {
    type: UPDATE_PATIENT_MEDICAL_RECORD,
    medicalRecord,
  };
}
