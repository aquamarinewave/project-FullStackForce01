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
    alert('Oppps');
    resetForm();
  };

  return (
    <ContainerAuth>
      <AuthTitle>Login</AuthTitle>
      <Formik initialValues={initialValues} validationSchema={userLoginSchema} onSubmit={handleSubmit}>
        {({ errors }) => (
          <AuthForm>
            <AuthField border={errors.email && '1px solid red'} type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" render={message => <ErrorText>{message}</ErrorText>} />
            <AuthFieldWrap>
              <AuthField
                border={errors.password && '1px solid red'}
                type={isShowPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <AuthShowPassword type="button" onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? (
                  <AuthIconShowPassword width={24} height={24}>
                    <use href={`${sprite}#icon-eye-closed`}></use>
                  </AuthIconShowPassword>
                ) : (
                  <AuthIconShowPassword width={24} height={24}>
                    <use href={`${sprite}#icon-eye-open`}></use>
                  </AuthIconShowPassword>
                )}
              </AuthShowPassword>
            </AuthFieldWrap>
            <ErrorMessage name="password" render={message => <ErrorText>{message}</ErrorText>} />
            <AuthLoginButton type="submit">Login</AuthLoginButton>
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
