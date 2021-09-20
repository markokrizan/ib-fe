import AppointmentForm from 'components/AppointmentForm';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAppointment } from 'store/appointment/actions';
import {
  makeSelectAppointment,
  makeSelectAppointmentError,
  makeSelectIsAppointmentLoading,
} from 'store/appointment/selectors';

const Appointment = () => {
  const { appointmentId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointment(appointmentId));
  }, []);

  const appointment = useSelector(makeSelectAppointment());
  const appointmentLoading = useSelector(makeSelectIsAppointmentLoading());
  const appointmentError = useSelector(makeSelectAppointmentError());

  if (appointmentLoading) {
    return <span>Loading...</span>;
  }

  if (appointmentError) {
    return <span>Error loading appointment!</span>;
  }

  if (!appointment) {
    return null;
  }

  return (
    <>
      <AppointmentForm appointment={appointment} />
    </>
  );
};

export default Appointment;
