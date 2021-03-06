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
import { makeSelectIsMedicalRecordSaveLoading } from 'store/appointment/selectors';
import { getUser } from 'store/user/actions';
import { makeSelectUser } from 'store/user/selectors';
import { isEmpty } from 'lodash-es';

const MedicalRecord = () => {
  let { id: patientId } = useParams();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getPatientMedicalRecord(patientId));
    dispatch(getUser(patientId));
  }, []);

  const medicalRecord = useSelector(makeSelectMedicalRecord());
  const patient = useSelector(makeSelectUser());

  return (
    <Card>
      <Card.Header>
        {t('appointments.patientLabel')}
        <span>{getUserFullName(medicalRecord?.patient || patient)}</span>
      </Card.Header>
      <Card.Body>
        {!isEmpty(medicalRecord) ? (
          <UpdateMedicalRecordForm medicalRecord={medicalRecord} />
        ) : (
          <CreateMedicalRecordForm patient={patient} />
        )}
      </Card.Body>
    </Card>
  );
};

const UpdateMedicalRecordForm = ({ medicalRecord }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isSavingMedicalRecord = useSelector(
    makeSelectIsMedicalRecordSaveLoading()
  );

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
          <Button
            type="submit"
            variant="primary"
            disabled={isSavingMedicalRecord}
          >
            {t('appointments.save')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const CreateMedicalRecordForm = ({ patient }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isSavingMedicalRecord = useSelector(
    makeSelectIsMedicalRecordSaveLoading()
  );

  const handleSubmit = ({ content }) => {
    dispatch(saveMedicalRecord(patient.id, { content }));
  };

  return (
    <Formik
      initialValues={{
        content: '',
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
          <Button
            type="submit"
            variant="primary"
            disabled={isSavingMedicalRecord}
          >
            {t('appointments.save')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MedicalRecord;
