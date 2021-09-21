import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getPatientMedicalRecord,
  saveMedicalRecord,
} from 'store/patient/actions';
import { makeSelectMedicalRecord } from 'store/patient/selectors';
import { getUserFullName } from 'utils/user';
import TextAreaInput from 'components/TextAreaInput';

export const MedicalRecord = () => {
  let { id: patientId } = useParams();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getPatientMedicalRecord(patientId));
  }, []);

  const medicalRecord = useSelector(makeSelectMedicalRecord());

  return (
    <Card>
      <Card.Header>
        {t('appointments.patientLabel')}{' '}
        <span>{getUserFullName(medicalRecord?.patient)}</span>
      </Card.Header>
      <Card.Body>
        <MedicalRecordForm medicalRecord={medicalRecord} />
      </Card.Body>
    </Card>
  );
};

const MedicalRecordForm = ({ medicalRecord }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = ({ content }) => {
    dispatch(
      saveMedicalRecord(medicalRecord.patient.id, {
        ...medicalRecord,
        content,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        content: medicalRecord?.content ?? '',
      }}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {(form) => (
        <Form className="d-flex flex-column w-100" onSubmit={form.handleSubmit}>
          <TextAreaInput
            name="content"
            label={t('medicalRecord.medicalRecord')}
          />
          <Button type="submit" variant="primary">
            {t('appointments.save')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
