import { Field } from 'formik';

import sprite from '../../../images/icons.svg';

import { BoxInputField, FieldLabel, InputField } from '../SecondStageForm/SecondStageForm.styled';
import {
  BoxPetAvatar,
  BoxRadioButtonSex,
  ContainerAvatar,
  ContainerButton,
  ContainerFormStepThird,
  ContainerInput,
  FieldAvatar,
  IconPlaceholder,
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

const heightTextarea = (currentRadioButton, checked) => {
  switch (checked) {
    case 'my-pet':
      return '79px';
    case 'sell':
      return '79px';
    default:
      return currentRadioButton !== 'my-pet' ? '182px' : '120px';
  }
};

const ThirdStageForm = ({
  showPlaceholder,
  setPreviewImage,
  setShowPlaceholder,
  previewImage,
  formik,
  setSelectedFile,
  currentRadioButton,
}) => {
  const handlePhotoChange = event => {
    const file = event.currentTarget.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
      setShowPlaceholder(false);
    } else {
      setSelectedFile(null);
      setShowPlaceholder(true);
      setPreviewImage('');
    }
  };

  return (
    <ContainerFormStepThird currentRadioButton={currentRadioButton !== 'my-pet'}>
      <ContainerButton>
        {currentRadioButton !== 'my-pet' && (
          <>
            <ParagraphPetAvatar>The sex</ParagraphPetAvatar>
            <BoxRadioButtonSex style={{ position: 'relative' }}>
              {optionsSex.map(({ value, label }) => (
                <RadioButtonSex key={value} checked={formik.values.sex === value}>
                  <IconSex
                    className={value === 'male' ? 'male-icon' : 'female-icon'}
                    selectedGender={formik.values.sex}
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
                    onChange={formik.handleChange}
                  />
                </RadioButtonSex>
              ))}
              {formik.touched.sex && formik.errors.sex && (
                <div style={{ color: 'red', position: 'absolute', top: '70%', left: 0 }}>{formik.errors.sex}</div>
              )}
            </BoxRadioButtonSex>
          </>
        )}
        <ContainerAvatar currentRadioButton={currentRadioButton !== 'my-pet'}>
          <ParagraphPetAvatar currentRadioButton={currentRadioButton !== 'my-pet'}>
            Load the pet’s image:
          </ParagraphPetAvatar>
          <BoxPetAvatar style={{ position: 'relative' }}>
            {showPlaceholder ? (
              <ShowPlaceholderAvatar>
                <IconPlaceholder>
                  <use href={`${sprite}#icon-plus`}></use>
                </IconPlaceholder>
              </ShowPlaceholderAvatar>
            ) : (
              <img src={previewImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
            <FieldAvatar type="file" id="avatar" name="avatar" accept="image/*" onChange={handlePhotoChange} />
            {formik.touched.avatar && formik.errors.avatar && (
              <div style={{ color: 'red', position: 'absolute', top: '60%', left: '20px' }}>{formik.errors.avatar}</div>
            )}
          </BoxPetAvatar>
        </ContainerAvatar>
      </ContainerButton>
      <ContainerInput>
        {currentRadioButton !== 'my-pet' && (
          <BoxInputField key="location" style={{ position: 'relative' }}>
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
            {formik.errors.location && (
              <div style={{ color: 'red', position: 'absolute', top: '100%', left: 0 }}>{formik.errors.location}</div>
            )}
          </BoxInputField>
        )}
        {currentRadioButton === 'sell' && (
          <BoxInputField key="price" style={{ position: 'relative' }}>
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
            {formik.touched.price && formik.errors.price && (
              <div style={{ color: 'red', position: 'absolute', top: '100%', left: 0 }}>{formik.errors.price}</div>
            )}
          </BoxInputField>
        )}
        <div>
          <TextSpan>Comments</TextSpan>
          <InputFieldTextArea
            currentRadioButton={currentRadioButton}
            as={TextArea}
            id="comments"
            name="comments"
            placeholder="Type of pet"
            value={formik.values.comments}
            onChange={formik.handleChange}
            checked={currentRadioButton}
            style={{ height: heightTextarea(currentRadioButton, formik.values.category) }}
          />
        </div>
      </ContainerInput>
    </ContainerFormStepThird>
  );
};

export default ThirdStageForm;
