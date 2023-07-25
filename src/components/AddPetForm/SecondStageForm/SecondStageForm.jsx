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
// const inputsToo = [
//   {
//     name: 'title',
//     placeholder: 'Title of add',
//     label: 'Title of add',
//   },
//   {
//     name: 'name',
//     placeholder: 'Type name pet',
//     label: 'Pet’s name',
//   },
//   {
//     name: 'birthday',
//     placeholder: 'Type date of birth',
//     label: 'Date of birth',
//   },
//   {
//     name: 'type',
//     placeholder: 'Type of pet',
//     label: 'Type',
//   },
// ];

// const formatDateInput = inputValue => {
//   const digitsOnly = inputValue.replace(/\D/g, '');
//   const formattedValue = digitsOnly.slice(0, 10);
//   const parts = formattedValue.match(/(\d{2})(\d{2})(\d{4})/);
//   if (parts) {
//     return `${parts[1]}.${parts[2]}.${parts[3]}`;
//   }
//   return inputValue.replace(/\D/g, '');
// };

const SecondStageForm = ({ formik, currentRadioButton }) => {
  if (currentRadioButton === 'your_pet') {
    return (
      <>
        {inputs.map(({ name, placeholder, label }) => (
          <BoxInputField key={name}>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <InputField
              type="text"
              id={name}
              name={name}
              autoComplete="off"
              placeholder={placeholder}
              value={formik.values[name]}
              onChange={formik.handleChange}
            />
            {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>}
          </BoxInputField>
        ))}
      </>
    );
  }
  // if (currentRadioButton === 'sell') {
  //   return (
  //     <>
  //       {inputsToo.map(({ name, placeholder, label }) => (
  //         <BoxInputField key={name}>
  //           <FieldLabel htmlFor={name}>{label}</FieldLabel>
  //           <InputField
  //             type="text"
  //             id={name}
  //             name={name}
  //             autoComplete="off"
  //             placeholder={placeholder}
  //             // value={formik.values[name]}
  //             // onChange={formik.handleChange}
  //             value={formatDateInput(formik.values[name])} // Використовуємо змінений формат
  //             onChange={e => {
  //               const formattedValue = formatDateInput(e.target.value);
  //               formik.setFieldValue(name, formattedValue); // Встановлюємо поле в форматованому значенні
  //             }}
  //           />
  //           {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>}
  //         </BoxInputField>
  //       ))}
  //     </>
  //   );
  // }
};

export default SecondStageForm;
