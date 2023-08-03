import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorText,
  ContainerAuth,
  AuthForm,
  AuthTitle,
  AuthField,
  AuthFieldWrap,
  AuthLinkToLogin,
  AuthLinkLogin,
  AuthLoginButton,
  AuthShowPassword,
  AuthIconShowPassword,
  AuthIconsValidation,
  AuthIconFailed,
  AuthIconCheck,
  ValidPassword,
} from './AuthForm.styled';

import authOperations from '../../redux/auth/operations';
import { useState } from 'react';
import sprite from '../../images/icons.svg';
import authSelector from 'redux/auth/authSelector';
import Loader from '../Loader/Loader';

const userLoginSchema = object({
  email: string().required('Email is a required field').email('Please enter a valid email'),
  password: string()
    .min(6, 'Please enter a correct password')
    .max(16, 'Please enter a correct password')
    .required('Password is a required field')
    .matches(/[0-9]/, 'Please enter a correct password')
    .matches(/[a-z]/, 'Please enter a correct password')
    .matches(/[A-Z]/, 'Please enter a correct password'),
});

const initialValues = { name: '', email: '', password: '', confirmPassword: '' };

const AuthFormLogin = props => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const error = useSelector(authSelector.userErrorSelector);
  const isLoading = useSelector(authSelector.loadingSelector);

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;

    dispatch(authOperations.loginUser({ email, password }));
    if (!error === null) {
      resetForm();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <ContainerAuth>
          <AuthTitle>Login</AuthTitle>
          <Formik initialValues={initialValues} validationSchema={userLoginSchema} onSubmit={handleSubmit}>
            {({ errors, touched, handleChange, handleBlur, values, isValid, isSubmitting }) => (
              <AuthForm>
                <AuthFieldWrap>
                  <AuthField
                    {...props}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                  />

                  {errors.email && touched.email && (
                    <AuthIconsValidation type="button">
                      <AuthIconFailed width={24} height={24}>
                        <use href={`${sprite}#icon-cross-small`}></use>
                      </AuthIconFailed>
                    </AuthIconsValidation>
                  )}
                  {!errors.email && touched.email && (
                    <AuthIconsValidation type="button">
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
                    <AuthIconsValidation type="button">
                      <AuthIconFailed width={24} height={24}>
                        <use href={`${sprite}#icon-cross-small`}></use>
                      </AuthIconFailed>
                    </AuthIconsValidation>
                  )}
                  {!errors.password && touched.password && (
                    <AuthIconsValidation type="button">
                      <AuthIconCheck width={24} height={24}>
                        <use href={`${sprite}#icon-check`}></use>
                      </AuthIconCheck>
                    </AuthIconsValidation>
                  )}

                  {isShowPassword ? (
                    <AuthShowPassword
                      type="button"
                      onClick={() => setIsShowPassword(!isShowPassword)}
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
                      value={values.password}
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
                {errors.password && touched.password && (
                  <ErrorMessage name="password" render={message => <ErrorText>{message}</ErrorText>} />
                )}
                <AuthLoginButton type="submit">Login</AuthLoginButton>
                <AuthLinkToLogin>
                  Don't have an account? <AuthLinkLogin to="/register">Registration</AuthLinkLogin>
                </AuthLinkToLogin>
              </AuthForm>
            )}
          </Formik>
        </ContainerAuth>
      )}
    </>
  );
};

export default AuthFormLogin;
