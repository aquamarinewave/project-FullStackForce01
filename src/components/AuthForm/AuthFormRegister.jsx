import { Formik, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';
import { useDispatch } from 'react-redux';
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
} from './AuthForm.styled';

import authOperations from '../../redux/auth/operations';
import { useState } from 'react';
import sprite from '../../images/icons.svg';

const userRegisterSchema = object({
  name: string().required().min(2, 'Your name is too short.').max(16, 'Your name is too long.'),
  email: string().required().email('Please enter a valid email'),
  password: string()
    .min(6, 'Your password is too short.')
    .max(16, 'Your password is too long.')
    .required()
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

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(authOperations.registrationUser({ name, email, password }));
    resetForm();
  };

  return (
    <ContainerAuth>
      <AuthTitle>Registration</AuthTitle>
      <Formik initialValues={initialValues} validationSchema={userRegisterSchema} onSubmit={handleSubmit}>
        {({ errors, touched, handleChange, handleBlur, values, isSubmitting, isValid }) => {
          return (
            <AuthForm>
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
                <ErrorMessage name="name" render={message => <ErrorText>{message}</ErrorText>} />
              </AuthFieldWrap>

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

                {errors.email && touched.email && (
                  <ErrorMessage name="email" render={message => <ErrorText>{message}</ErrorText>} />
                )}
              </AuthFieldWrap>

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
                      <use href={`${sprite}#icon-eye-closed`}></use>
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
                      <use href={`${sprite}#icon-eye-open`}></use>
                    </AuthIconShowPassword>
                  </AuthShowPassword>
                )}

                <ErrorMessage name="password" render={message => <ErrorText>{message}</ErrorText>} />
              </AuthFieldWrap>

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
                      <use href={`${sprite}#icon-eye-closed`}></use>
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
                      <use href={`${sprite}#icon-eye-open`}></use>
                    </AuthIconShowPassword>
                  </AuthShowConfirmPassword>
                )}

                <ErrorMessage name="confirmPassword" render={message => <ErrorText>{message}</ErrorText>} />
              </AuthFieldWrap>
              <AuthRegisterButton disabled={!isValid || isSubmitting} type="submit">
                Registration
              </AuthRegisterButton>
              <AuthLinkToLogin>
                Already have an account? <AuthLinkLogin to="/login">Login</AuthLinkLogin>
              </AuthLinkToLogin>
            </AuthForm>
          );
        }}
      </Formik>
    </ContainerAuth>
  );
};

export default AuthFormRegister;