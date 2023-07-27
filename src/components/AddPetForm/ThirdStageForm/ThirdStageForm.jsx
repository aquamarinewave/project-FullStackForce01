// import { useState } from 'react';
import { BoxInputField, FieldLabel, InputField } from '../SecondStageForm/SecondStageForm.styled';
import {
  BoxPetAvatar,
  BoxRadioButtonSex,
  ContainerAvatar,
  FieldAvatar,
  IconSex,
  InputFieldTextArea,
  ParagraphPetAvatar,
  RadioButtonSex,
  ShowPlaceholderAvatar,
  TextArea,
  TextSpan,
} from './ThirdStageForm.styled';
// import { RadioButton } from '../FirstStageForm/FirstStageForm.styled';
import { Field } from 'formik';
import Icon from 'utils/Icon/Icon';

import sprite from '../../../images/icons.svg';

const ThirdStageForm = ({
  showPlaceholder,
  setPreviewImage,
  setShowPlaceholder,
  setSelectedFile,
  previewImage,
  formik,
  currentRadioButton,
  selectedGender,
  handleSexChange,
  // handleOptionChange,
}) => {
  // const handlePhotoChange = event => {
  //   const file = event.currentTarget.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //     setShowPlaceholder(false);
  //     setSelectedFile(file);
  //   } else {
  //     setShowPlaceholder(true);
  //     setPreviewImage('');
  //     setSelectedFile(null);
  //   }
  // };

  const handlePhotoChange = event => {
    const file = event.currentTarget.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
      setPreviewImage('');
      setSelectedFile(null);
    }
  };

  // const [selectedGender, setSelectedGender] = useState('');

  const optionsSex = [
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'male',
      label: 'Male',
    },
  ];

  return (
    <>
      {currentRadioButton !== 'your_pet' && (
        <>
          {' '}
          <ParagraphPetAvatar>The sex</ParagraphPetAvatar>
          <BoxRadioButtonSex>
            {optionsSex.map(({ value, label }) => (
              // <div key={value}>
              <RadioButtonSex key={value} checked={selectedGender === value}>
                <IconSex stroke={value === 'male' ? 'var(--dark-blue)' : 'var(--fail-color)'} width={24} height={24}>
                  <use href={`${sprite}#icon-${value}`}></use>
                </IconSex>
                {label}
                {/* <FieldLabel htmlFor={`opt${value}`}>{label}</FieldLabel> */}
                <Field
                  key={`opt${value}`}
                  type="radio"
                  name={`sex`}
                  id={`opt${value}`}
                  value={value}
                  onChange={handleSexChange}
                />
              </RadioButtonSex>
              // </div>
            ))}
          </BoxRadioButtonSex>
        </>
      )}
      <ContainerAvatar>
        <ParagraphPetAvatar>Load the pet’s image:</ParagraphPetAvatar>
        <BoxPetAvatar>
          {showPlaceholder ? (
            <ShowPlaceholderAvatar>
              <Icon name="plus" color="var(--dark-blue)" size={30} />
            </ShowPlaceholderAvatar>
          ) : (
            <img src={previewImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          <FieldAvatar type="file" id="photoInput" name="avatar" accept="image/*" onChange={handlePhotoChange} />
        </BoxPetAvatar>
      </ContainerAvatar>
      {currentRadioButton !== 'your_pet' && (
        <BoxInputField key="location">
          <FieldLabel htmlFor="location">Location</FieldLabel>
          <InputField
            type="text"
            id="location"
            name="location"
            autoComplete="off"
            placeholder="Type of location"
            value={formik.values.location}
            onChange={formik.handleChange}
            // onKeyPress={name === 'birthday' ? handleNumericInput : null}
            // inputMode={name === 'birthday' ? 'numeric' : 'text'}
            // maxLength={10}
            // pattern={pattern}
          />
          {/* {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>} */}
        </BoxInputField>
      )}
      {currentRadioButton === 'sell' && (
        <BoxInputField key="price">
          <FieldLabel htmlFor="price">Price</FieldLabel>
          <InputField
            type="text"
            id="price"
            name="price"
            autoComplete="off"
            placeholder="Type of price"
            value={formik.values.price}
            onChange={formik.handleChange}
            // onKeyPress={name === 'birthday' ? handleNumericInput : null}
            // inputMode={name === 'birthday' ? 'numeric' : 'text'}
            // maxLength={10}
            // pattern={pattern}
          />
          {/* {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>} */}
        </BoxInputField>
      )}
      <div>
        <TextSpan>Comments</TextSpan>
        <InputFieldTextArea
          as={TextArea} // Використовуємо наші стилі для textarea
          id="comments"
          name="comments" // Вказуємо ім'я поля, яке буде використовуватись в Formik
          placeholder="Type of pet"
          value={formik.values.comments}
          onChange={formik.handleChange}
          // onChange={event => {
          //   handlePhotoChange(event);
          //   setSelectedFile(event.currentTarget.files[0]);
          // }}
        />
      </div>
    </>
  );
};

export default ThirdStageForm;
