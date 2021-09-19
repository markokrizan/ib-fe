import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  DOCTOR_APPOINTMENTS: (doctorId) => `/doctors/${doctorId}/appointments`,
};

class AppointmentService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  getDoctorAppointments = (doctorId) => {
    return this.httpService.request({
      url: ROUTES.DOCTOR_APPOINTMENTS(doctorId),
      method: HTTP_METHODS.GET,
    });
  };
}

const appointmentService = new AppointmentService(httpService);

export default appointmentService;
