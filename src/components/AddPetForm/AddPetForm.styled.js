import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 12px 0; */
  width: 264px;
  min-height: 496px;
  padding: 8px;
  margin: auto;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputField = styled(Field)`
  max-width: 100%;
  height: 24px;
  padding: 8px 16px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 150%; */
  /* letter-spacing: 0.56px; */
  border: 1px solid var(--dark-blue);
  border-radius: 40px;

  &::placeholder {
    color: #888;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  &:hover {
    border: 1px solid var(--accent-color);
  }
`;
export const BoxInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputFieldTextArea = styled(Field)`
  height: 72px;
`;

export const TextArea = styled.textarea`
  max-height: 92px;
  padding: 8px 16px;
  border: 1px solid var(--dark-blue);
  border-radius: 20px;
  resize: vertical;
`;

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

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 36px;
`;

export const TitleAddPetForm = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: fit-content;
  margin-bottom: 24px;
  color: #111;
`;

export const NextStageForm = styled.h3`
  position: relative;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;
  color: ${props => (props.current === 'first' ? 'var(--dark-blue)' : `var(--success-color)`)};
  &:after {
    content: '';
    position: absolute;
    background-color: ${props => (props.current === 'first' ? 'var(--dark-blue)' : `var(--success-color)`)};
    border-radius: 8px;
    width: 80px;
    height: 8px;
    top: 25px;
    left: 0;
  }
  &:nth-child(2) {
    color: ${props => (props.current === 'second' ? 'var(--dark-blue)' : `#888`)};
  }
  &:nth-child(2)::after {
    background-color: ${props => (props.current === 'second' ? 'var(--dark-blue)' : `var(--lightblue)`)};
  }
  &:last-child {
    color: ${props => (props.current === 'third' ? 'var(--dark-blue)' : `#888`)};
  }
  &:last-child::after {
    background-color: ${props => (props.current === 'third' ? 'var(--dark-blue)' : `var(--lightblue)`)};
  }
`;

export const BoxStageForm = styled.div`
  display: flex;
  gap: 11px;
  color: red;
`;

export const BoxFieldsForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const RadioButton = styled.label`
  display: inline-block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  border-radius: 40px;
  padding: 8px 16px;
  margin-right: 10px;
  background-color: ${props => (props.checked ? 'var(--dark-blue)' : 'var(--lightblue)')};
  color: ${props => (props.checked ? '#fef9f9' : 'var(--dark-blue)')};
  cursor: pointer;
  width: fit-content;

  input {
    display: none;
  }

  input:checked + span {
    color: #fef9f9;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 12px;
  justify-content: center;
  background-color: var(--dark-blue);
  border: none;
  border-radius: 40px;
  padding: 8px 28px;
  text-align: center;
  align-content: center;
  align-items: center;
  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  & span {
    margin: auto 0;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #fef9f9;
    color: var(--dark-blue);
  }
  &:last-child {
    background-color: transparent;
    color: var(--dark-blue);
    text-align: center;
    align-content: center;
    align-items: center;
  }
`;
export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
