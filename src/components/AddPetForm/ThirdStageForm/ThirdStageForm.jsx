import { Field } from 'formik';

import sprite from '../../../images/icons.svg';

import { BoxErrorMessage, BoxInputField, FieldLabel, InputField } from '../SecondStageForm/SecondStageForm.styled';
import {
  BoxAvatarErrorMessage,
  BoxComment,
  BoxPetAvatar,
  BoxRadioButtonSex,
  BoxSexErrorMessage,
  ContainerAvatar,
  ContainerButton,
  ContainerFormStepThird,
  ContainerInput,
  FieldAvatar,
  IconPlaceholder,
  IconSex,
  InputFieldTextArea,
  ParagraphPetAvatar,
  PetImgAvatar,
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
            <BoxRadioButtonSex>
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
              {formik.touched.sex && formik.errors.sex && <BoxSexErrorMessage>{formik.errors.sex}</BoxSexErrorMessage>}
            </BoxRadioButtonSex>
          </>
        )}
        <ContainerAvatar currentRadioButton={currentRadioButton !== 'my-pet'}>
          <ParagraphPetAvatar currentRadioButton={currentRadioButton !== 'my-pet'}>
            Load the pet’s image:
          </ParagraphPetAvatar>
          <BoxPetAvatar>
            {showPlaceholder ? (
              <ShowPlaceholderAvatar>
                <IconPlaceholder>
                  <use href={`${sprite}#icon-plus`}></use>
                </IconPlaceholder>
              </ShowPlaceholderAvatar>
            ) : (
              <PetImgAvatar src={previewImage} alt="Selected" />
            )}
            <FieldAvatar type="file" id="avatar" name="avatar" accept="image/*" onChange={handlePhotoChange} />
            {formik.touched.avatar && formik.errors.avatar && (
              <BoxAvatarErrorMessage>{formik.errors.avatar}</BoxAvatarErrorMessage>
            )}
          </BoxPetAvatar>
        </ContainerAvatar>
      </ContainerButton>
      <ContainerInput>
        {currentRadioButton !== 'my-pet' && (
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
              className={formik.touched.price && formik.errors.price ? 'error-input' : ''}
            />
            {formik.errors.location && <BoxErrorMessage>{formik.errors.location}</BoxErrorMessage>}
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
              className={formik.touched.price && formik.errors.price ? 'error-input' : ''}
            />
            {formik.touched.price && formik.errors.price && <BoxErrorMessage>{formik.errors.price}</BoxErrorMessage>}
          </BoxInputField>
        )}
        <BoxComment>
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
          {formik.touched.price && formik.errors.comments && (
            <BoxErrorMessage>{formik.errors.comments}</BoxErrorMessage>
          )}
        </BoxComment>
      </ContainerInput>
    </ContainerFormStepThird>
  );
};

export default ThirdStageForm;
