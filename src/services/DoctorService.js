import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  DOCTORS: '/users/doctors',
  DOCTOR: (doctorId) => `/users/doctors/${doctorId}`,
};

class DoctorService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  getDoctors = () => {
    return this.httpService.request({
      url: ROUTES.DOCTORS,
      method: HTTP_METHODS.GET,
    });
  };

  getDoctor = (id) => {
    return this.httpService.request({
      url: ROUTES.DOCTOR(id),
      method: HTTP_METHODS.GET,
    });
  };
}

const doctorService = new DoctorService(httpService);

export default doctorService;
