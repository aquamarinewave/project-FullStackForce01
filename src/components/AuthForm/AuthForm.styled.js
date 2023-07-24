import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorText = styled.p`
  color: var(--fail-color);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ContainerAuth = styled.div`
  width: 280px;
  margin: 0 auto;
  margin-top: 44px;
  height: 100%;
  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  @media screen and (min-width: 768px) {
    width: 608px;
    margin: 0 auto;
    margin-top: 88px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    margin-top: 91px;
  }
`;

export const AuthTitle = styled.h1`
  color: var(--main-color);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 40px;
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;
    margin-top: 60px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthField = styled(Field)`
  display: flex;
  width: 256px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid var(--dark-blue);
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.64px;
  margin-top: 32px;
  &:focus {
    margin-top: ${({ margin }) => margin || '14px'};
  }
  /* margin-top: ${({ margin }) => margin || '14px'}; */

  @media screen and (min-width: 768px) {
    width: 458px;
    &:focus {
      margin-top: ${({ margin }) => margin || '32px'};
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthFieldWrap = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthShowPassword = styled.button`
  background-color: inherit;
  border: none;
  position: absolute;
  top: 45px;
  left: 90%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthShowConfirmPassword = styled.button`
  background-color: inherit;
  border: none;
  position: absolute;
  top: 45px;
  left: 90%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthRegisterButton = styled.button`
  display: flex;
  width: 256px;
  height: 48px;
  padding: 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: var(--dark-blue);
  margin: 0 auto;
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.8px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 458px;
    margin-top: 52px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthLoginButton = styled.button`
  display: flex;
  width: 256px;
  height: 48px;
  padding: 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: var(--dark-blue);
  margin: 0 auto;
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.8px;
  margin-top: 110px;
  @media screen and (min-width: 768px) {
    width: 458px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthLinkToLogin = styled.p`
  color: #888;
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  margin-top: 8px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 16px;
  }
`;

export const AuthLinkLogin = styled(Link)`
  color: var(--dark-blue);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AuthIconShowPassword = styled.svg`
  stroke: var(--dark-blue);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
