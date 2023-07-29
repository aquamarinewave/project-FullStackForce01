import { Field } from 'formik';

import Icon from 'utils/Icon/Icon';
import sprite from '../../../images/icons.svg';

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

const colorIcon = checked => {
  switch (checked) {
    case 'male':
      return '#fef9f9';
    case 'female':
      return '#888';
    default:
      return 'var(--dark-blue)';
  }
};

const colorIconFemale = checked => {
  switch (checked) {
    case 'female':
      return '#fef9f9';
    case 'male':
      return '#888';
    default:
      return 'var(--fail-color)';
  }
};

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
}) => {
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

  return (
    <>
      {currentRadioButton !== 'your_pet' && (
        <>
          {' '}
          <ParagraphPetAvatar>The sex</ParagraphPetAvatar>
          <BoxRadioButtonSex>
            {optionsSex.map(({ value, label }) => (
              <RadioButtonSex key={value} checked={selectedGender === value}>
                <IconSex
                  className={value === 'male' ? 'male-icon' : 'female-icon'}
                  colorIcon={colorIcon(selectedGender)}
                  colorIconFemale={colorIconFemale(selectedGender)}
                >
                  <use href={`${sprite}#icon-${value}`}></use>
                </IconSex>
                {label}
                <Field
                  key={`opt${value}`}
                  type="radio"
                  name={`sex`}
                  id={`opt${value}`}
                  value={value}
                  onChange={handleSexChange}
                />
              </RadioButtonSex>
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
          />
          {/* {formik.touched[name] && formik.errors[name] && <div style={{ color: 'red' }}>{formik.errors[name]}</div>} */}
        </BoxInputField>
      )}
      <div>
        <TextSpan>Comments</TextSpan>
        <InputFieldTextArea
          as={TextArea} // Використовуємо наші стилі для textarea
          id="comments"
          name="comments"
          placeholder="Type of pet"
          value={formik.values.comments}
          onChange={formik.handleChange}
        />
      </div>
    </>
  );
};

export default ThirdStageForm;
