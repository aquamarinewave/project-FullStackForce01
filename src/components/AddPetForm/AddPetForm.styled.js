import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

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
    color: ${props => props.title};
  }
  &:nth-child(2)::after {
    background-color: ${props => (props.title === '#888' ? `var(--lightblue)` : props.title)};
  }
  &:last-child {
    color: ${props => (props.current === 'third' ? 'var(--dark-blue)' : `#888`)};
  }
  &:last-child::after {
    background-color: ${props => (props.current === 'third' ? 'var(--dark-blue)' : `var(--lightblue)`)};
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  min-height: 496px;
  padding: 8px;
  margin: auto;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
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
  margin-left: 12px;
  margin-bottom: 24px;
  color: #111;
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

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
