import styled from 'styled-components';
import { Field } from 'formik';

export const ContainerInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
export const BoxInputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const BoxErrorMessage = styled.div`
  color: red;
  position: absolute;
  top: 100%;
  left: 0;
`;

export const InputField = styled(Field)`
  max-width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border: 1px solid var(--dark-blue);
  border-radius: 40px;

  &.error-input {
    border: 1px solid red;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 16px;
    height: 48px;
  }

  &::placeholder {
    color: #888;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  &:hover {
    border: 1px solid var(--accent-color);
  }
`;
