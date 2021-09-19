import AppointmentBook from 'components/AppointmentBook';
import AppointmentPreview from 'components/AppointmentPreview';
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
  const isBooked = !!appointment?.patient;

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
      <AppointmentPreview appointment={appointment} showDetailsLink={false} />
      {!isBooked && <AppointmentBook appointment={appointment} />}
    </>
  );
};

export default Appointment;
