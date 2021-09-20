import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath } from 'react-router';
import { getUserFullName, userHasRole } from 'utils/user';
import { ROLE_PATIENT } from 'utils/constants';

import { makeSelectUser } from 'store/auth/selectors';
import { bookAppointment } from 'store/appointment/actions';
import { makeSelectIsAppointmentBookLoading } from 'store/appointment/selectors';
import { DOCTOR_APPOINTMENT } from 'routes';
import Link from 'components/Link';
import { getPresentationFormat } from 'utils/date';

const AppointmentPreview = ({ appointment }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loggedInUser = useSelector(makeSelectUser());
  const doctorFullName = getUserFullName(appointment?.doctor);
  const isBooked = !!appointment?.patient;
  const isPatient = userHasRole(loggedInUser, ROLE_PATIENT);
  const isAppointmentBookLoading = useSelector(
    makeSelectIsAppointmentBookLoading()
  );
  const appointmentsLink = generatePath(DOCTOR_APPOINTMENT, {
    doctorId: appointment?.doctor?.id,
    appointmentId: appointment?.id,
  });

  const book = () =>
    dispatch(bookAppointment({ appointment, patient: loggedInUser }));

  const Header = () => (
    <Card.Header as="h5">
      {t('appointments.with', { doctorName: doctorFullName })}
      {isBooked && <span className="ml-1">({t('appointments.booked')})</span>}
    </Card.Header>
  );

  return (
    <Card className="mb-3">
      {!isPatient && !isBooked ? (
        <Link to={appointmentsLink}>
          <Header />
        </Link>
      ) : (
        <Header />
      )}

      <Card.Body>
        <Card.Title>{t('appointments.date')}</Card.Title>
        <Card.Text>{getPresentationFormat(appointment.date)}</Card.Text>
        {!isBooked && isPatient && (
          <Button onClick={book} disabled={isAppointmentBookLoading}>
            {t('appointments.book')}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default AppointmentPreview;
