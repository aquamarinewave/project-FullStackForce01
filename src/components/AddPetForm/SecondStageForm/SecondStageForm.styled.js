import { Field } from 'formik';
import styled from 'styled-components';

export const BoxInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  height: 40px;
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
