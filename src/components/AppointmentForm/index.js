import { Form, Formik } from 'formik';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Select from 'components/Select';
import useDoctors from 'hooks/useDoctors';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectUser } from 'store/auth/selectors';
import { getUserFullName, userHasRole } from 'utils/user';
import { ROLE_ADMIN, ROLE_DOCTOR } from 'utils/constants';
import Yup from 'utils/validations';
import DateInput from 'components/DateInput';
import { saveAppointment } from 'store/appointment/actions';

export const validationSchema = Yup.object().shape({
  doctor: Yup.string().required('global.validations.required'),
  date: Yup.string().required('global.validations.required'),
});

const AppointmentForm = ({ appointment }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isBooked = appointment.patient;

  const { doctors, doctorsLoading } = useDoctors({
    shoudFetch: !isBooked,
  });

  const loggedInUser = useSelector(makeSelectUser());

  if (isBooked) {
    return <span>{t('appointments.booked')}</span>;
  }

  if (doctorsLoading) {
    return <span>{t('common.loading')}</span>;
  }

  if (!doctors?.content?.length) {
    return null;
  }

  const doctorOptions = doctors.content.map((doctor) => ({
    value: doctor.id,
    label: getUserFullName(doctor),
  }));

  const isAdmin = userHasRole(loggedInUser, ROLE_ADMIN);
  const isDoctor = userHasRole(loggedInUser, ROLE_DOCTOR);

  const handleOnSubmit = (data) => {
    const values = {
      ...data,
      doctor: { id: data.doctor },
      ...(appointment ? { id: appointment.id } : {}),
    };

    dispatch(saveAppointment(values));
  };

  const getInitialValues = () => {
    if (appointment) {
      return {
        doctor: appointment.doctor.id ?? '',
        date: appointment.date ?? '',
      };
    }

    if (isAdmin) {
      return {
        doctor: doctorOptions[0]?.value ?? '',
        date: '',
      };
    }

    if (isDoctor) {
      return {
        doctor: loggedInUser.id,
        date: '',
      };
    }

    return {
      doctor: '',
      date: '',
    };
  };

  return (
    <div>
      <Card className="mb-3">
        <Card.Header as="h5">{t('appointments.updateAppointment')}</Card.Header>

        <Card.Body className="d-flex justify-content-center">
          <Formik
            initialValues={getInitialValues()}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
          >
            <Form className="d-flex flex-column w-50">
              <Select
                name="doctor"
                label={t('appointments.doctorLabel')}
                options={doctorOptions}
                disabled={!isAdmin}
              />
              <DateInput name="date" label={t('appointments.dateLabel')} />
              <Button disabled={false} type="submit">
                {t('appointments.save')}
              </Button>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AppointmentForm;
