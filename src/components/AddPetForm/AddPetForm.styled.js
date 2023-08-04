import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

const titleColorText = step => {
  switch (step) {
    case 'second':
      return 'var(--dark-blue)';
    case 'third':
      return 'var(--success-color)';
    default:
      return '#888';
  }
};

export const NextStageForm = styled.h3`
  position: relative;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;
  color: ${props => (props.current === 'first' ? 'var(--dark-blue)' : `var(--success-color)`)};
  @media screen and (min-width: 768px) {
    width: 120px;
    font-size: 16px;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: ${props => (props.current === 'first' ? 'var(--dark-blue)' : `var(--success-color)`)};
    border-radius: 8px;
    width: 80px;
    height: 8px;
    top: 25px;
    left: 0;
    @media screen and (min-width: 768px) {
      width: 120px;
      top: 35px;
    }
  }
  &:nth-child(2) {
    color: ${({ currentStage }) => titleColorText(currentStage)};
  }
  &:nth-child(2)::after {
    background-color: ${({ currentStage }) =>
      currentStage === 'first' ? 'var(--lightblue)' : titleColorText(currentStage)};
  }
  &:last-child {
    color: ${props => (props.current === 'third' ? 'var(--dark-blue)' : `#888`)};
  }
  &:last-child::after {
    background-color: ${props => (props.current === 'third' ? 'var(--dark-blue)' : `var(--lightblue)`)};
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  min-height: 496px;
  padding: 20px 8px;
  margin: 20px auto 0;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    width: ${props => (props.currentStage === 'third' && props.currentRadioButton !== 'my-pet' ? '704px' : '458px')};
    min-height: 542px;
    padding: 32px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: ${props => (props.currentStage === 'third' && props.currentRadioButton !== 'my-pet' ? '822px' : '458px')};
    margin-top: 40px;
  }
`;
export const Form = styled(FormikForm)`
  display: flex;
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

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin: ${props =>
      props.currentStage === 'third' && props.currentRadioButton !== 'my-pet' ? '0 auto 24px auto' : '0 0 24px 0'};
  }
`;

export const BoxStageForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  color: red;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const BoxFieldsForm = styled.div`
  margin: 0 auto;
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    margin-top: ${props => (props.currentStage === 'second' ? '40px' : '17px')};
  }
`;
