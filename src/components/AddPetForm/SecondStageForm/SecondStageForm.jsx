import { BoxErrorMessage, BoxInputField, ContainerInputField, FieldLabel, InputField } from './SecondStageForm.styled';

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
        currentRadioButton === 'my-pet' && name === 'title' ? null : (
          <BoxInputField key={`pet-key-${name}`}>
            <FieldLabel htmlFor={`pet-${name}`}>{label}</FieldLabel>
            <InputField
              type={inputType(name)}
              id={`pet-${name}`}
              name={name}
              autoComplete="off"
              placeholder={placeholder}
              value={formik.values[name]}
              className={formik.touched[name] && formik.errors[name] ? 'error-input' : ''}
            />
            {formik.touched[name] && formik.errors[name] && <BoxErrorMessage>{formik.errors[name]}</BoxErrorMessage>}
          </BoxInputField>
        )
      )}
    </ContainerInputField>
  );
};

export default SecondStageForm;
