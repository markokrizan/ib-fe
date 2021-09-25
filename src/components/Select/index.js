import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Select = ({
  name,
  label,
  placeholder,
  options,
  multiple = false,
  ...rest
}) => {
  const { t } = useTranslation();

  const Options = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <Field name={name}>
      {({ field: { value, onChange }, form: { touched, errors } }) => (
        <Form.Group className="mb-3">
          {label && <Form.Label htmlFor={label}>{label}</Form.Label>}
          <select
            value={value}
            onChange={onChange}
            name={name}
            className="form-control w-100"
            multiple={multiple}
            {...rest}
          >
            {Options}
          </select>
          {!!touched[name] && !!errors[name] && (
            <Form.Text className="text-danger">{t(errors[name])}</Form.Text>
          )}
        </Form.Group>
      )}
    </Field>
  );
};

export default Select;
