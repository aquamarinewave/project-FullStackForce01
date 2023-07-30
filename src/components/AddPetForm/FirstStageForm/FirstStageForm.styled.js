import styled from 'styled-components';
import { Field } from 'formik';

export const ContainerRadioButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
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
  background-color: ${props => (props.checked ? 'var(--dark-blue)' : 'var(--lightblue)')};
  color: ${props => (props.checked ? '#fef9f9' : 'var(--dark-blue)')};
  cursor: pointer;
  width: fit-content;
`;

export const RadioInput = styled(Field)`
  display: none;

  &:checked + ${RadioButton} {
    background-color: var(--dark-blue);
    color: #fef9f9;
  }
`;
