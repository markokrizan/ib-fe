import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from 'store/doctor/actions';
import {
  makeSelectDoctor,
  makeSelectIsDoctorLoading,
  makeSelectDoctorError,
} from 'store/doctor/selectors';
import DoctorPreview from 'components/DoctorPreview';
import { useParams } from 'react-router';
import { getDoctorAppointments } from 'store/appointment/actions';
import {
  makeSelectAreDoctorsAppointmentsLoading,
  makeSelectDoctorsAppointments,
  makeSelectDoctorsAppointmentsError,
} from 'store/appointment/selectors';
import AppointmentPreview from 'components/AppointmentPreview';
import { useTranslation } from 'react-i18next';

const Doctor = () => {
  const { id: doctorId } = useParams();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(doctorId));
    dispatch(getDoctorAppointments(doctorId));
  }, []);

  const doctor = useSelector(makeSelectDoctor());
  const doctorLoading = useSelector(makeSelectIsDoctorLoading());
  const doctorError = useSelector(makeSelectDoctorError());

  const doctorAppointments = useSelector(makeSelectDoctorsAppointments());
  const ddoctorAppointmentsLoading = useSelector(
    makeSelectAreDoctorsAppointmentsLoading()
  );
  const doctorAppointmentsError = useSelector(
    makeSelectDoctorsAppointmentsError()
  );

  if (doctorLoading || ddoctorAppointmentsLoading) {
    return <span>Loading...</span>;
  }

  if (doctorError || doctorAppointmentsError) {
    return <span>Error loading doctors!</span>;
  }

  if (!doctor) {
    return null;
  }

  return (
    <>
      <DoctorPreview doctor={doctor} />
      <h5>{t('appointments.appointments')}</h5>
      {doctorAppointments?.content.map((appointment) => (
        <AppointmentPreview key={appointment.id} appointment={appointment} />
      ))}
    </>
  );
};

export default Doctor;
