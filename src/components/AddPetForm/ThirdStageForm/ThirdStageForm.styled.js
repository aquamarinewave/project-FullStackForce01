import styled from 'styled-components';
import { Field } from 'formik';

const colorIconMale = selectedGender => {
  switch (selectedGender) {
    case 'male':
      return '#fef9f9';
    case 'female':
      return '#888';
    default:
      return 'var(--dark-blue)';
  }
};

const colorIconFemale = selectedGender => {
  switch (selectedGender) {
    case 'female':
      return '#fef9f9';
    case 'male':
      return '#888';
    default:
      return 'var(--fail-color)';
  }
};

export const ContainerFormStepThird = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: ${props => (props.currentRadioButton ? 'row' : 'column')};
    gap: ${props => (props.currentRadioButton ? '34px' : '24px')};
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: ${props => (props.currentRadioButton ? 'column' : 'row')};
    align-items: ${props => (props.currentRadioButton ? 'start' : 'center')};
    margin-top: ${props => (props.currentRadioButton ? '40px' : '0')};
    gap: ${props => (props.currentRadioButton ? '8px' : '16px')};
  }
`;

export const ParagraphPetAvatar = styled.p`
  width: 81px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #111;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: ${props => (props.currentRadioButton ? '200px' : '114px')};
  }
`;

export const BoxPetAvatar = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;
export const PetImgAvatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ShowPlaceholderAvatar = styled.div`
  background-color: var(--lightblue);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TextSpan = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #111;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FieldAvatar = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &.error-input {
    border: 1px solid red;
  }
`;

export const InputFieldTextArea = styled(Field)`
  margin-top: 4px;
  width: 100%;
  height: 92px;
`;

export const TextArea = styled.textarea`
  padding: 8px 16px;
  border: 1px solid var(--dark-blue);
  border-radius: 20px;
  resize: vertical;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IconPlaceholder = styled.svg`
  width: 30px;
  height: 30px;
  stroke: var(--dark-blue);

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const IconSex = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;

  &.male-icon {
    stroke: ${({ selectedGender }) => colorIconMale(selectedGender)};
  }
  &.female-icon {
    stroke: ${({ selectedGender }) => colorIconFemale(selectedGender)};
  }
`;

export const RadioButtonSex = styled.label`
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  border-radius: 40px;
  padding: 8px 16px;
  margin-bottom: 10px;
  background-color: ${props => (props.checked ? 'var(--dark-blue)' : null)};
  color: ${props => (props.checked ? '#fef9f9' : '#888')};
  cursor: pointer;
  width: fit-content;

  input {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const BoxRadioButtonSex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const BoxSexErrorMessage = styled.div`
  color: red;
  position: absolute;
  top: 70%;
  left: 0;
`;

export const BoxAvatarErrorMessage = styled.div`
  color: red;
  position: absolute;
  top: 60%;
  left: 20px;
`;

export const BoxComment = styled.div`
  position: relative;
`;
