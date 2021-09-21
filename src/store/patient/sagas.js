import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getPatientError,
  getPatientMedicalRecordError,
  saveMedicalRecordError,
  setPatient,
  setPatientMedicalRecord,
  updatePatientMedicalRecord,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import {
  GET_PATIENT_REQUEST,
  GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST,
  SAVE_MEDICAL_RECORD,
} from './actionTypes';
import userService from 'services/UserService';
import patientService from 'services/PatientService';

export function* getPatient({ type, patientId }) {
  try {
    yield put(startAction(type));

    const patient = yield call(userService.getUser, patientId);

    yield put(setPatient(patient));
  } catch (error) {
    yield put(getPatientError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* getPatientMedicalRecord({ type, patientId }) {
  try {
    yield put(startAction(type));

    const medicalRecord = yield call(
      patientService.getPatientMedicalRequest,
      patientId
    );

    yield put(setPatientMedicalRecord(medicalRecord));
  } catch (error) {
    yield put(getPatientMedicalRecordError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* savePatientMedicalRecord({ type, patientId, medicalRecord }) {
  try {
    yield put(startAction(type));

    const updatedMedicalRecord = yield call(
      patientService.savePatientMedicalRecord,
      patientId,
      {
        ...medicalRecord,
        patient: {
          id: patientId,
        },
      }
    );

    yield put(updatePatientMedicalRecord(updatedMedicalRecord));
  } catch (error) {
    yield put(saveMedicalRecordError());
  } finally {
    yield put(stopAction(type));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(GET_PATIENT_REQUEST, getPatient);
  yield takeLatest(
    GET_PATIENT_REQUEST_MEDICAL_RECORD_REQUEST,
    getPatientMedicalRecord
  );
  yield takeLatest(SAVE_MEDICAL_RECORD, savePatientMedicalRecord);
}
