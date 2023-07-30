import styled from 'styled-components';
import { Field } from 'formik';

export const ContainerFormStepThird = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: ${props => (props.currentRadioButton !== 'your_pet' ? 'row' : 'column')};
    gap: ${props => (props.currentRadioButton !== 'your_pet' ? '34px' : '24px')};
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: ${props => (props.currentRadioButton !== 'your_pet' ? 'column' : 'row')};
    align-items: ${props => (props.currentRadioButton !== 'your_pet' ? 'start' : 'center')};
    margin-top: ${props => (props.currentRadioButton !== 'your_pet' ? '40px' : '0')};
    gap: ${props => (props.currentRadioButton !== 'your_pet' ? '8px' : '16px')};
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
    width: ${props => (props.currentRadioButton !== 'your_pet' ? '200px' : '114px')};
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

export const InputFieldTextArea = styled(Field)`
  margin-top: 4px;
  width: 100%;
`;

export const FieldAvatar = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  height: 92px;
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
    stroke: ${props => (props.colorIcon === 'male' ? `#fef9f9` : props.colorIcon)};
  }
  &.female-icon {
    stroke: ${props => (props.colorIconFemale === 'female' ? '#fef9f9' : props.colorIconFemale)};
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
