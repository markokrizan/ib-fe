import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const DateInput = ({ name, label, placeholder, ...rest }) => {
  const { t } = useTranslation();

  return (
    <Field name={name}>
      {({ field: { value, onChange }, form: { touched, errors } }) => (
        <Form.Group className="mb-3">
          {label && <Form.Label htmlFor={label}>{label}</Form.Label>}
          <input
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            className="w-100"
            {...rest}
          />
          {!!touched[name] && !!errors[name] && (
            <Form.Text className="text-danger">{t(errors[name])}</Form.Text>
          )}
        </Form.Group>
      )}
    </Field>
  );
};

export default DateInput;
