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

const heightTextarea = checked => {
  switch (checked) {
    case 'your_pet':
      return '79px';
    case 'sell':
      return '79px';
    default:
      return '182px';
  }
};

const ThirdStageForm = ({
  showPlaceholder,
  setPreviewImage,
  setShowPlaceholder,
  previewImage,
  formik,
  setSelectedFile,
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
    formik.handleChange(event);
  };

  return (
    <ContainerFormStepThird currentRadioButton={formik.values.category !== 'your_pet'}>
      <ContainerButton>
        {formik.values.category !== 'your_pet' && (
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
            </BoxRadioButtonSex>
          </>
        )}
        <ContainerAvatar currentRadioButton={formik.values.category !== 'your_pet'}>
          <ParagraphPetAvatar currentRadioButton={formik.values.category !== 'your_pet'}>
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
              <img src={previewImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
            <FieldAvatar type="file" id="avatar" name="avatar" accept="image/*" onChange={handlePhotoChange} />
          </BoxPetAvatar>
        </ContainerAvatar>
      </ContainerButton>
      <ContainerInput>
        {formik.values.category !== 'your_pet' && (
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
        {formik.values.category === 'sell' && (
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
            heightTextarea={heightTextarea(formik.values.category)}
            // currentRadioButton={currentRadioButton === 'sell'}
            as={TextArea} // Використовуємо наші стилі для textarea
            id="comments"
            name="comments"
            placeholder="Type of pet"
            value={formik.values.comments}
            onChange={formik.handleChange}
          />
        </div>
      </ContainerInput>
    </ContainerFormStepThird>
  );
};

export default ThirdStageForm;
