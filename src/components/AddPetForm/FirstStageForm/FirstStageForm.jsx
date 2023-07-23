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

const FirstStageForm = ({ formik }) => {
  return (
    <>
      {options.map(({ value, label }) => (
        <RadioButton key={value} checked={formik.values.option === value}>
          <Field type="radio" name="option" value={value} onChange={formik.handleChange} />
          <span>{label}</span>
        </RadioButton>
      ))}
    </>
  );
};

export default FirstStageForm;
