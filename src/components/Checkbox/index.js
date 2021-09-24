import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Checkbox = ({ name, type, label, placeholder, ...rest }) => {
  const { t } = useTranslation();

  return (
    <Field name={name}>
      {({ field: { value, onChange }, form: { touched, errors } }) => (
        <Form.Group className="mb-3">
          {label && (
            <Form.Label htmlFor={label} className="me-1">
              {label}
            </Form.Label>
          )}
          <input
            type="checkbox"
            className="form-check-input"
            name={name}
            value={value}
            checked={value}
            onChange={onChange}
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

export default Checkbox;
