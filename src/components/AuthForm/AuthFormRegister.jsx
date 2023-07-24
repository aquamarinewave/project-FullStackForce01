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
  // const [isShowModal, setIsShowModal] = useState(true)

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(authOperations.registrationUser({ name, email, password }));
    //  ModalCongrats()
    resetForm();
  };

  return (
    <ContainerAuth>
      <AuthTitle>Registration</AuthTitle>
      <Formik initialValues={initialValues} validationSchema={userRegisterSchema} onSubmit={handleSubmit}>
        {({ errors }) => (
          <AuthForm>
            <AuthFieldWrap>
              <AuthField
                {...props}
                margin-top={errors.name && '2px'}
                border={errors.name && '1px solid red'}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" render={message => <ErrorText>{message}</ErrorText>} />
            </AuthFieldWrap>

            <AuthFieldWrap>
              <AuthField border={errors.email && '1px solid red'} type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" render={message => <ErrorText>{message}</ErrorText>} />
            </AuthFieldWrap>
            <AuthFieldWrap>
              <AuthField
                margin-top={errors.password && '2px'}
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

              <ErrorMessage name="password" render={message => <ErrorText>{message}</ErrorText>} />
            </AuthFieldWrap>

            <AuthFieldWrap>
              <AuthField
                margin={errors.password && '2px'}
                border={errors.confirmPassword && '1px solid red'}
                type={isShowConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <AuthShowConfirmPassword type="button" onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                {isShowConfirmPassword ? (
                  <AuthIconShowPassword width={24} height={24}>
                    <use href={`${sprite}#icon-eye-closed`}></use>
                  </AuthIconShowPassword>
                ) : (
                  <AuthIconShowPassword width={24} height={24}>
                    <use href={`${sprite}#icon-eye-open`}></use>
                  </AuthIconShowPassword>
                )}
              </AuthShowConfirmPassword>

              <ErrorMessage name="confirmPassword" render={message => <ErrorText>{message}</ErrorText>} />
            </AuthFieldWrap>
            <AuthRegisterButton type="submit">Registration</AuthRegisterButton>
            <AuthLinkToLogin>
              Don't have an account? <AuthLinkLogin to="/login">Login</AuthLinkLogin>
            </AuthLinkToLogin>
          </AuthForm>
        )}
      </Formik>
    </ContainerAuth>
  );
};

export default AuthFormRegister;
