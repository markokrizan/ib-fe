import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  PATIENT_MEDICAL_RECORD: (patientId) => `/patients/${patientId}/records`,
};

class PatientService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  getPatientMedicalRequest = (patientId) => {
    return this.httpService.request({
      url: ROUTES.PATIENT_MEDICAL_RECORD(patientId),
      method: HTTP_METHODS.GET,
    });
  };

  savePatientMedicalRecord = (patientId, data) => {
    return this.httpService.request({
      url: ROUTES.PATIENT_MEDICAL_RECORD(patientId),
      method: HTTP_METHODS.POST,
      data,
    });
  };
}

const patientService = new PatientService(httpService);

export default patientService;
