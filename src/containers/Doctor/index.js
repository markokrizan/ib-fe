import React, { useEffect, useState } from 'react';
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
import { Button, Container } from 'react-bootstrap';
import { makeSelectUser } from 'store/auth/selectors';
import { userHasRoles } from 'utils/user';
import { ROLE_ADMIN } from 'utils/constants';
import AppointmentForm from 'components/AppointmentForm';

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
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

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

  const loggedInUser = useSelector(makeSelectUser());
  const canAddApointment =
    userHasRoles(loggedInUser, ROLE_ADMIN) ||
    loggedInUser.id === parseInt(doctorId);

  if (doctorError || doctorAppointmentsError) {
    return <span>Error loading doctors!</span>;
  }

  if (!doctor) {
    return null;
  }

  const AppointmentButton = () => {
    if (!canAddApointment) {
      return null;
    }

    const handleClick = () => setShowAppointmentForm(!showAppointmentForm);
    const label = showAppointmentForm ? 'Close' : 'Add appointment';

    return (
      <Container className="d-flex justify-content-end p-0 mb-3" fluid>
        <Button onClick={handleClick}>{label}</Button>
      </Container>
    );
  };

  return (
    <>
      <DoctorPreview doctor={doctor} />
      <AppointmentButton />
      {showAppointmentForm && <AppointmentForm />}
      <h5>{t('appointments.appointments')}</h5>
      {doctorAppointments?.content?.length ? (
        doctorAppointments?.content?.map((appointment) => (
          <AppointmentPreview key={appointment.id} appointment={appointment} />
        ))
      ) : (
        <span>{t('appointments.noAppointments')}</span>
      )}
    </>
  );
};

export default Doctor;
