import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import { generatePath } from 'react-router';
import { DOCTOR_APPOINTMENT } from 'routes';

const AppointmentPreview = ({ appointment }) => {
  const { t } = useTranslation();

  const doctorFullName = `${appointment?.doctor?.firstName} ${appointment?.doctor?.lastName}`;
  const appointmentsLink = generatePath(DOCTOR_APPOINTMENT, {
    doctorId: appointment?.doctor?.id,
    appointmentId: appointment?.id,
  });
  const isBooked = !!appointment?.patient;

  return (
    <Card>
      <Card.Header as="h5">
        {t('appointments.with', { doctorName: doctorFullName })}
        {isBooked && <span className="ml-1">({t('appointments.booked')})</span>}
      </Card.Header>
      <Card.Body>
        <Card.Title>{t('appointments.date')}</Card.Title>
        <Card.Text>{appointment.date}</Card.Text>
        {!isBooked && (
          <Link to={appointmentsLink}>{t('appointments.book')}</Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default AppointmentPreview;
