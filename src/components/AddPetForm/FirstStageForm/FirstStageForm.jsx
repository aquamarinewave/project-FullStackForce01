const { RadioButton, RadioInput, ContainerRadioButton } = require('./FirstStageForm.styled');

const options = [
  {
    value: 'my-pet',
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
    <ContainerRadioButton>
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
    </ContainerRadioButton>
  );
};

export default FirstStageForm;
