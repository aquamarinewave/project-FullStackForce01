import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
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
} from './AuthForm.styled';

import authOperations from '../../redux/auth/operations';
import { useState } from 'react';
import sprite from '../../images/icons.svg';

const userLoginSchema = object({
  email: string().required().email('Please enter a valid email'),
  password: string()
    .min(6, 'Your password is too short.')
    .max(16, 'Your password is too long.')
    .required()
    .matches(/[0-9]/, 'Your password must have at least 1 number')
    .matches(/[a-z]/, 'Your password must have at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Your password must have at least 1 uppercase letter'),
});

const initialValues = { name: '', email: '', password: '', confirmPassword: '' };




const AuthFormLogin = props => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(authOperations.loginUser({ email, password }));
    resetForm();
  };

  return (
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
              )}
              <ErrorMessage name="password" render={message => <ErrorText>{message}</ErrorText>} />
            </AuthFieldWrap>

            <AuthLoginButton disabled={!isValid || isSubmitting} type="submit">
              Login
            </AuthLoginButton>
            <AuthLinkToLogin>
              Don't have an account? <AuthLinkLogin to="/register">Registration</AuthLinkLogin>
            </AuthLinkToLogin>
          </AuthForm>
        )}
      </Formik>
    </ContainerAuth>
  );
};

export default AuthFormLogin;