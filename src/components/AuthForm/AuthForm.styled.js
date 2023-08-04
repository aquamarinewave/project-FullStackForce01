import { Form } from 'formik';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import AuthFormStyledHelpers from './AuthFormStyledHelpers';

export const ErrorText = styled.p`
  color: var(--fail-color);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 30px;

  @media screen and (min-width: 768px) {
    margin-left: 92px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ValidPassword = styled.p`
  color: var(--green, #00c3ad);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 30px;

  @media screen and (min-width: 768px) {
    margin-left: 92px;
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
  /* align-items: center; */
  justify-content: center;
`;

export const AuthFieldWrap = styled.div`
  position: relative;
  align-self: center;
`;

export const AuthField = styled(AuthFormStyledHelpers.FilteredPropsInputField)`
  display: flex;

  width: 256px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid var(--dark-blue);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.64px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    width: 458px;
  }

  &:focus,
  &:active {
    border: 1px solid var(--dark-blue);
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid green;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid green;
        outline: none;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid red;
        outline: none;
      }`
    }
`;

export const AuthShowPassword = styled(AuthFormStyledHelpers.FilteredPropsButtonShowPassword)`
  background-color: inherit;
  border: none;
  position: absolute;
  top: 45px;
  left: 80%;
  @media screen and (min-width: 768px) {
    left: 90%;
  }
  ${({ error }) =>
    error &&
    css`
      left: 70%;
      @media screen and (min-width: 768px) {
        left: 80%;
      }
    `}
  ${({ valid }) =>
    valid &&
    css`
      left: 70%;
      @media screen and (min-width: 768px) {
        left: 80%;
      }
    `}
`;

export const AuthShowConfirmPassword = styled(AuthFormStyledHelpers.FilteredPropsButtonShowConfirmPassword)`
  background-color: inherit;
  border: none;
  position: absolute;
  top: 45px;
  left: 80%;
  @media screen and (min-width: 768px) {
    left: 90%;
  }

  ${({ error }) =>
    error &&
    css`
      left: 70%;
      @media screen and (min-width: 768px) {
        left: 80%;
      }
    `}
  ${({ valid }) =>
    valid &&
    css`
      left: 70%;
      @media screen and (min-width: 768px) {
        left: 80%;
      }
    `}
`;

export const AuthIconShowPassword = styled(AuthFormStyledHelpers.FilteredPropsIconShowPassword)`
  stroke: var(--dark-blue);
  ${({ valid }) =>
    valid &&
    css`
      stroke: #888888;
    `}
`;

export const AuthIconFailed = styled.svg`
  stroke: var(--fail-color);
`;

export const AuthIconCheck = styled.svg`
  stroke: green;
`;

export const AuthIconsValidation = styled.button`
  background-color: inherit;
  border: none;
  position: absolute;
  top: 45px;
  left: 85%;

  @media screen and (min-width: 768px) {
    left: 90%;
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
  &:hover {
    cursor: pointer;
    background: linear-gradient(315deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 100%);
    border: transparent;
  }

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

  &:hover {
    cursor: pointer;
    background: linear-gradient(315deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 100%);
    border: transparent;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
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
`;
