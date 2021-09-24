import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from 'store/doctor/actions';
import {
  makeSelectDoctor,
  makeSelectDoctorError,
} from 'store/doctor/selectors';
import DoctorPreview from 'components/DoctorPreview';
import { Switch, Route, useParams, useRouteMatch } from 'react-router';
import { getDoctorAppointments } from 'store/appointment/actions';
import {
  makeSelectDoctorsAppointments,
  makeSelectDoctorsAppointmentsError,
} from 'store/appointment/selectors';
import AppointmentPreview from 'components/AppointmentPreview';
import { useTranslation } from 'react-i18next';
import Appointment from 'containers/Appointment';

const Doctor = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={SingleDoctor} />
      <Route
        exact
        path={`${path}/appointments/:appointmentId`}
        component={Appointment}
      />
    </Switch>
  );
};

const SingleDoctor = () => {
  const { id: doctorId } = useParams();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(doctorId));
    dispatch(getDoctorAppointments(doctorId));
  }, []);

  const doctor = useSelector(makeSelectDoctor());
  const doctorError = useSelector(makeSelectDoctorError());

  const doctorAppointments = useSelector(makeSelectDoctorsAppointments());
  const doctorAppointmentsError = useSelector(
    makeSelectDoctorsAppointmentsError()
  );

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
      {doctorAppointments?.content?.map((appointment) => (
        <AppointmentPreview key={appointment.id} appointment={appointment} />
      ))}
    </>
  );
};

export default Doctor;
