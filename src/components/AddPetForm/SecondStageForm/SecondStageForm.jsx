import { BoxInputField, FieldLabel, InputField } from './SecondStageForm.styled';

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
    pattern: '\\d*',
  },
  {
    name: 'type',
    placeholder: 'Type of pet',
    label: 'Type',
  },
];
const SecondStageForm = ({ formik, currentRadioButton }) => {
  const handleNumericInput = e => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  const handleDateInput = e => {
    let input = e.target.value.replace(/\D/g, ''); // Видаляємо всі символи, що не є цифрами

    if (input.length > 8) {
      // Обрізаємо додаткові цифри, якщо довжина перевищує 8 символів
      input = input.slice(0, 8);
    }

    let formattedInput = '';
    let index = 0;

    const day = input.slice(index, (index += 2));
    if (day) {
      formattedInput += day;
    }

    const month = input.slice(index, (index += 2));
    if (month) {
      formattedInput += `.${month}`;
    }

    const year = input.slice(index);
    if (year) {
      formattedInput += `.${year}`;
    }

    e.target.value = formattedInput;
    formik.setFieldValue('birthday', formattedInput);

    if (input.length === 2) {
      // Якщо введено дві цифри, переключаємо фокус на наступне поле (місяць народження)
      const monthInput = document.getElementById('monthInput');
      if (monthInput) {
        monthInput.focus();
        monthInput.select();
      }
    } else if (input.length === 4) {
      // Якщо введено чотири цифри, переключаємо фокус на наступне поле (рік народження)
      const yearInput = document.getElementById('yearInput');
      if (yearInput) {
        yearInput.focus();
        yearInput.select();
      }
    }
  };

  return (
    <>
      {inputs.map(({ name, placeholder, label, pattern }) =>
        currentRadioButton === 'your_pet' && ['title'].includes(name) ? null : (
          <BoxInputField key={name}>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <InputField
              type="text"
              id={name}
              name={name}
              autoComplete="off"
              placeholder={placeholder}
              value={formik.values[name]}
              onChange={name === 'birthday' ? handleDateInput : formik.handleChange}
              onKeyPress={name === 'birthday' ? handleNumericInput : null}
              inputMode={name === 'birthday' ? 'numeric' : 'text'}
              maxLength={10}
              pattern={pattern}
            />
            {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>}
          </BoxInputField>
        )
      )}
    </>
  );
};

export default SecondStageForm;
