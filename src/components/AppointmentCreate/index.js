import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Select from 'components/Select';
import useDoctors from 'hooks/useDoctors';
import { useSelector } from 'react-redux';
import { makeSelectUser } from 'store/auth/selectors';
import { getUserFullName, userHasRole } from 'utils/user';
import { ROLE_DOCTOR } from 'utils/constants';
import Yup from 'utils/validations';
import DateInput from 'components/DateInput';

export const validationSchema = Yup.object().shape({
  doctor: Yup.string().required('global.validations.required'),
  date: Yup.string().required('global.validations.required'),
});

const CreateAppointment = () => {
  const { t } = useTranslation();

  const { doctors, doctorsLoading } = useDoctors();
  const loggedInUser = useSelector(makeSelectUser());

  if (doctorsLoading) {
    return <span>Loading...</span>;
  }

  if (!doctors?.content?.length) {
    return null;
  }

  const doctorOptions = doctors.content.map((doctor) => ({
    value: doctor.id,
    label: getUserFullName(doctor),
  }));

  const isDoctor = userHasRole(loggedInUser, ROLE_DOCTOR);

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Formik
        initialValues={{
          doctor: isDoctor ? loggedInUser.id : doctorOptions[0].value,
          date: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <Form className="d-flex flex-column w-25">
          <Select
            name="doctor"
            label={t('appointments.doctorLabel')}
            options={doctorOptions}
            disabled={isDoctor}
          />
          <DateInput name="date" label={t('appointments.dateLabel')} />
          <Button disabled={false} type="submit">
            {t('appointments.create')}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAppointment;
