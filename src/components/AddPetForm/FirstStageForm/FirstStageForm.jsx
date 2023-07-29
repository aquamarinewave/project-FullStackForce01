const { RadioButton, RadioInput } = require('./FirstStageForm.styled');

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
    value: 'lost-found',
    label: 'lost/found',
  },
  {
    value: 'for-free',
    label: 'in good hands',
  },
];

const FirstStageForm = ({ handleOptionChange, currentRadioButton }) => {
  return (
    <>
      {options.map(({ value, label }) => (
        <RadioButton key={value} checked={currentRadioButton === value}>
          {label}
          <RadioInput
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
