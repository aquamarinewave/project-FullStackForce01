import { FieldLabel } from '../SecondStageForm/SecondStageForm.styled';

const { Field } = require('formik');
const { RadioButton } = require('./FirstStageForm.styled');

const options = [
  {
    value: 'your_pet',
    label: 'your pet',
  },
  {
    value: 'sell',
    label: 'sell',
  },
  {
    value: 'lost_or_found',
    label: 'lost/found',
  },
  {
    value: 'in_good_hands',
    label: 'in good hands',
  },
];

const FirstStageForm = ({ formik, handleOptionChange, currentRadioButton }) => {
  return (
    <>
      {options.map(({ value, label }) => (
        <RadioButton key={value} checked={currentRadioButton === value}>
          <FieldLabel htmlFor={`option_${value}`}>{label}</FieldLabel>
          <Field
            key={`option_${value}`}
            type="radio"
            name="category"
            id={`option_${value}`}
            value={value}
            onChange={handleOptionChange}
          />
        </RadioButton>
      ))}
    </>
  );
};

export default FirstStageForm;
