import { Formik, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';
import {
  ErrorText,
  ContainerAuth,
  AuthForm,
  AuthTitle,
  AuthField,
  AuthLinkToLogin,
  AuthLinkLogin,
  AuthRegisterButton,
  AuthShowPassword,
  AuthShowConfirmPassword,
  AuthFieldWrap,
  AuthIconShowPassword,
  AuthIconFailed,
  AuthIconsValidation,
  AuthIconCheck,
  ValidPassword,
} from './AuthForm.styled';

import authOperations from '../../redux/auth/operations';
import { useState } from 'react';
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import authSelector from 'redux/auth/authSelector';

const userRegisterSchema = object({
  name: string().required('Name is a required field').min(2, 'Your name is too short.').max(16, 'Your name is too long.'),
  email: string().required('Email is a required field').email('Please enter a valid email'),
  password: string()
    .min(6, 'Your password is too short.')
    .max(16, 'Your password is too long.')
    .required('Password is a required field')
    .matches(/[0-9]/, 'Your password must have at least 1 number')
    .matches(/[a-z]/, 'Your password must have at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Your password must have at least 1 uppercase letter'),
  confirmPassword: string()
    .required('Please retype your password.')
    .oneOf([ref('password')], 'Your passwords do not match.'),
});

const initialValues = { name: '', email: '', password: '', confirmPassword: '' };

const AuthFormRegister = props => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const isLoading = useSelector(authSelector.loadingSelector);

  const handleSubmitRegister = ({ name, email, password }) => {
    dispatch(authOperations.registrationUser({ name, email, password }));
  };

  return (
    <>
      {' '}
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerAuth>
          <AuthTitle>Registration</AuthTitle>
          <Formik initialValues={initialValues} validationSchema={userRegisterSchema} onSubmit={handleSubmitRegister}>
            {({ errors, touched, handleChange, handleBlur, values, handleSubmit }) => {
              return (
                <AuthForm onSubmit={handleSubmit}>
                  <AuthFieldWrap>
                    <AuthField
                      {...props}
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      valid={touched.name && !errors.name}
                      error={touched.name && errors.name}
                    />

                    {errors.name && touched.name && (
                      <AuthIconsValidation>
                        <AuthIconFailed width={24} height={24}>
                          <use href={`${sprite}#icon-cross-small`}></use>
                        </AuthIconFailed>
                      </AuthIconsValidation>
                    )}
                    {!errors.name && touched.name && (
                      <AuthIconsValidation>
                        <AuthIconCheck width={24} height={24}>
                          <use href={`${sprite}#icon-check`}></use>
                        </AuthIconCheck>
                      </AuthIconsValidation>
                    )}
                  </AuthFieldWrap>
                  <ErrorMessage name="name" render={message => <ErrorText>{message}</ErrorText>} />

                  <AuthFieldWrap>
                    <AuthField
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />

                    {errors.email && touched.email && (
                      <AuthIconsValidation>
                        <AuthIconFailed width={24} height={24}>
                          <use href={`${sprite}#icon-cross-small`}></use>
                        </AuthIconFailed>
                      </AuthIconsValidation>
                    )}
                    {!errors.email && touched.email && (
                      <AuthIconsValidation>
                        <AuthIconCheck width={24} height={24}>
                          <use href={`${sprite}#icon-check`}></use>
                        </AuthIconCheck>
                      </AuthIconsValidation>
                    )}
                  </AuthFieldWrap>
                  <ErrorMessage name="email" render={message => <ErrorText>{message}</ErrorText>} />

                  <AuthFieldWrap>
                    <AuthField
                      type={isShowPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      valid={touched.password && !errors.password}
                      error={touched.password && errors.password}
                    />

                    {errors.password && touched.password && (
                      <AuthIconsValidation>
                        <AuthIconFailed width={24} height={24}>
                          <use href={`${sprite}#icon-cross-small`}></use>
                        </AuthIconFailed>
                      </AuthIconsValidation>
                    )}
                    {!errors.password && touched.password && (
                      <AuthIconsValidation>
                        <AuthIconCheck width={24} height={24}>
                          <use href={`${sprite}#icon-check`}></use>
                        </AuthIconCheck>
                      </AuthIconsValidation>
                    )}

                    {isShowPassword ? (
                      <AuthShowPassword
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        valid={touched.password && !errors.password}
                        error={touched.password && errors.password}
                      >
                        <AuthIconShowPassword width={24} height={24} valid={touched.password && !errors.password}>
                          <use href={`${sprite}#icon-eye-open`}></use>
                        </AuthIconShowPassword>
                      </AuthShowPassword>
                    ) : (
                      <AuthShowPassword
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        valid={touched.password && !errors.password}
                        error={touched.password && errors.password}
                      >
                        <AuthIconShowPassword width={24} height={24} valid={touched.password && !errors.password}>
                          <use href={`${sprite}#icon-eye-closed`}></use>
                        </AuthIconShowPassword>
                      </AuthShowPassword>
                    )}
                  </AuthFieldWrap>
                  {touched.password && !errors.password && !isShowPassword && (
                    <ValidPassword>Password is secure</ValidPassword>
                  )}
                  <ErrorMessage name="password" render={message => <ErrorText>{message}</ErrorText>} />

                  <AuthFieldWrap>
                    <AuthField
                      type={isShowConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      valid={touched.confirmPassword && !errors.confirmPassword}
                      error={touched.confirmPassword && errors.confirmPassword}
                    />

                    {errors.confirmPassword && touched.password && (
                      <AuthIconsValidation>
                        <AuthIconFailed width={24} height={24}>
                          <use href={`${sprite}#icon-cross-small`}></use>
                        </AuthIconFailed>
                      </AuthIconsValidation>
                    )}
                    {!errors.confirmPassword && touched.password && (
                      <AuthIconsValidation>
                        <AuthIconCheck width={24} height={24}>
                          <use href={`${sprite}#icon-check`}></use>
                        </AuthIconCheck>
                      </AuthIconsValidation>
                    )}

                    {isShowConfirmPassword ? (
                      <AuthShowConfirmPassword
                        type="button"
                        onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        valid={touched.password && !errors.password}
                        error={touched.password && errors.password}
                      >
                        <AuthIconShowPassword width={24} height={24} valid={touched.password && !errors.password}>
                          <use href={`${sprite}#icon-eye-open`}></use>
                        </AuthIconShowPassword>
                      </AuthShowConfirmPassword>
                    ) : (
                      <AuthShowConfirmPassword
                        type="button"
                        onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        valid={touched.password && !errors.password}
                        error={touched.password && errors.password}
                      >
                        <AuthIconShowPassword width={24} height={24} valid={touched.password && !errors.password}>
                          <use href={`${sprite}#icon-eye-closed`}></use>
                        </AuthIconShowPassword>
                      </AuthShowConfirmPassword>
                    )}
                  </AuthFieldWrap>
                  <ErrorMessage name="confirmPassword" render={message => <ErrorText>{message}</ErrorText>} />
                  <AuthRegisterButton type="submit">Registration</AuthRegisterButton>

                  <AuthLinkToLogin>
                    Already have an account? <AuthLinkLogin to="/login">Login</AuthLinkLogin>
                  </AuthLinkToLogin>
                </AuthForm>
              );
            }}
          </Formik>
        </ContainerAuth>
      )}
    </>
  );
};

export default AuthFormRegister;
