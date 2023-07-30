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
  @media screen and (min-width: 768px) {
    width: 120px;
    /* min-height: 542px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 280px; */
    /* min-height: 542px; */
    /* margin-top: 20px; */
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
      /* min-height: 542px; */
    }

    @media screen and (min-width: 1280px) {
      /* width: 280px; */
      /* min-height: 542px; */
      /* margin-top: 20px; */
    }
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
  @media screen and (min-width: 768px) {
    width: 458px;
    min-height: 542px;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    /* width: 280px; */
    /* min-height: 542px; */
    /* margin-top: 20px; */
  }
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
  gap: 12px;
  color: red;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    /* width: 280px; */
    /* min-height: 542px; */
    /* margin-top: 20px; */
  }
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
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* width: 458px;
    min-height: 542px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 280px; */
    /* min-height: 542px; */
    /* margin-top: 20px; */
  }
`;
