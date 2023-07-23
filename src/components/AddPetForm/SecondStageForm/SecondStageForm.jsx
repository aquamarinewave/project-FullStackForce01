// import { Field } from 'formik';
import { BoxInputField, FieldLabel, InputField } from './SecondStageForm.styled';
// import { useState } from 'react';

const inputs = [
  {
    name: 'name',
    placeholder: 'Type name pet',
    label: 'Pet’s name',
  },
  {
    name: 'date_of_birth',
    placeholder: 'Type date of birth',
    label: 'Date of birth',
  },
  {
    name: 'type',
    placeholder: 'Type of pet',
    label: 'Type',
  },
];

const SecondStageForm = ({ formik }) => {
  return (
    <>
      {inputs.map(({ name, placeholder, label }) => (
        <BoxInputField key={name}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <InputField
            type="text"
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            onChange={formik.handleChange}
          />
          {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>}
        </BoxInputField>
      ))}
    </>
  );
};

export default SecondStageForm;
