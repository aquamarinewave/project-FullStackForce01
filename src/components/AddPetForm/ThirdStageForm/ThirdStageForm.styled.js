import styled from 'styled-components';
import { Field } from 'formik';

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 207px;
  margin-bottom: 24px;
`;
export const ParagraphPetAvatar = styled.p`
  max-width: 81px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #111;
`;
export const BoxPetAvatar = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  overflow: hidden;
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
`;

export const TextArea = styled.textarea`
  height: 92px;
  padding: 8px 16px;
  border: 1px solid var(--dark-blue);
  border-radius: 20px;
  resize: vertical;
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
  margin-right: 10px;
  background-color: ${props => (props.checked ? 'var(--dark-blue)' : null)};
  color: ${props => (props.checked ? '#fef9f9' : '#888')};
  cursor: pointer;
  width: fit-content;

  input {
    display: none;
  }

  input:checked {
    color: #fef9f9;
  }
`;

export const BoxRadioButtonSex = styled.div`
  display: flex;
`;
