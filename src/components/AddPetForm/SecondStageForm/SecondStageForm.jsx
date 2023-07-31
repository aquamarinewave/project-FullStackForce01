import { BoxInputField, ContainerInputField, FieldLabel, InputField } from './SecondStageForm.styled';

const inputs = [
  {
    name: 'title',
    placeholder: 'Title of add',
    label: 'Title of add',
  },
  {
    name: 'name',
    placeholder: 'Type name pet',
    label: 'Pet’s name',
  },
  {
    name: 'birthday',
    placeholder: 'Type date of birth',
    label: 'Date of birth',
  },
  {
    name: 'type',
    placeholder: 'Type of pet',
    label: 'Type',
  },
];

const inputType = name => {
  switch (name) {
    case 'birthday':
      return 'date';
    case 'price':
      return 'number';
    default:
      return 'text';
  }
};

const SecondStageForm = ({ formik, currentRadioButton }) => {
  return (
    <ContainerInputField>
      {inputs.map(({ name, placeholder, label }) =>
        currentRadioButton === 'my-pet' && ['title'].includes(name) ? null : (
          <BoxInputField key={name}>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <InputField
              type={inputType(name)}
              id={name}
              name={name}
              autoComplete="off"
              placeholder={placeholder}
              value={formik.values[name]}
              // onChange={name === 'birthday' ? handleDateInput : formik.handleChange}
              // onKeyPress={name === 'birthday' ? handleNumericInput : null}
              // inputMode={name === 'birthday' ? 'numeric' : 'text'}
              // maxLength={10}
              // pattern={pattern}
            />
            {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>}
          </BoxInputField>
        )
      )}
    </ContainerInputField>
  );
};

export default SecondStageForm;
