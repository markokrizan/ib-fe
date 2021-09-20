import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  DOCTOR_APPOINTMENTS: (doctorId) => `/doctors/${doctorId}/appointments`,
  APPOINTMENT: (appointmentId) => `/appoinments/${appointmentId}`,
  BOOK_APPOINTMENT: '/appoinments/book',
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

  getAppointment = (appointmentId) => {
    return this.httpService.request({
      url: ROUTES.APPOINTMENT(appointmentId),
      method: HTTP_METHODS.GET,
    });
  };

  bookAppointment = (data) => {
    return this.httpService.request({
      url: ROUTES.BOOK_APPOINTMENT,
      method: HTTP_METHODS.PUT,
      data,
    });
  };
}

const appointmentService = new AppointmentService(httpService);

export default appointmentService;
