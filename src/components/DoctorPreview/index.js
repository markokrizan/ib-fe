import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import { generatePath } from 'react-router';
import { DOCTOR } from 'routes';

const DoctorPreview = ({ doctor }) => {
  const { t } = useTranslation();

  const fullName = `${doctor?.firstName} ${doctor?.lastName}`;
  const contactInformation = `${doctor?.email} | ${doctor?.phoneNumber}`;
  const appointmentsLink = generatePath(DOCTOR, { id: doctor?.id });

  return (
    <Card className="mb-3">
      <Card.Header as="h5">{fullName}</Card.Header>
      <Card.Body>
        <Card.Title>{t('doctors_page.contact_information')}</Card.Title>
        <Card.Text>{contactInformation}</Card.Text>
        <Link to={appointmentsLink}>{t('doctors_page.details')}</Link>
      </Card.Body>
    </Card>
  );
};

export default DoctorPreview;
