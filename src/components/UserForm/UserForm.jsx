import { Formik, Form } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
// import { useEffect } from 'react';
import authSelector from 'redux/auth/authSelector';
import avatarDefault from 'images/profilephotos/avatar-default.png';
import { useSelector, useDispatch } from 'react-redux';
import { AvatarWrapper, ImgAvatar, WrapperField, Label, ProfileField } from '../UserData/UserData.styled';
import { SubmitBtn, Container, ErrorMassege } from './UserForm.styled';
import { updateUser } from 'redux/auth/operations';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export const UserForm = ({ toggleModal }) => {
  const user = useSelector(authSelector.userSelector);

  const dispatch = useDispatch();

  const initialValues = {
    avatarURL: user?.avatarURL || { avatarDefault },
    name: user?.name || 'Enter your name',
    email: user?.email || 'example@mail.com',
    phone: user?.phone || '+380000000000',
    birthday: user?.birthday || '01.01.2000',
    city: user?.city || 'Kiev',
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    try {
      // if (avatarUrl) {
      //   formData.append('avatarUrl', avatarUrl);
      // }
      if (initialValues.name !== values.name && values.name) {
        formData.append('name', values.name);
      }
      if (initialValues.email !== values.email && values.email) {
        formData.append('email', values.email);
      }
      if (initialValues.phone !== values.phone) {
        formData.append('phone', values.phone);
      }
      if (initialValues.city !== values.city) formData.append('city', values.city);
      for (const value of formData.values()) {
        console.log(value);
      }
      const res = await dispatch(updateUser(formData));
      console.log(res);
      toggleModal();

      if (res.data.status === '200') {
        toast.success('Profile  updated');
      } else {
        toast.success('Profile successfully updated');
      }
      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  const shema = yup.object().shape({
    name: yup.string().max(16, 'Name must be less than 16 characters').trim().required('Please enter your name'),
    email: yup.string().email('Incorrect email').required('Email is required'),
    phone: yup
      .string()
      .matches(/^\+?3?8?(0\d{9})$/, 'Phone format: +380000000000')
      .max(13, 'Phone format: +380000000000')
      .min(13, 'Phone format: +380000000000'),
    city: yup.string().max(16, 'Name must be less than 16 characters').trim().required('Please enter your city'),
  });

  return (
    <div>
      <Formik initialValues={initialValues} dirty validationSchema={shema} onSubmit={handleFormSubmit}>
        {({ dirty, errors, touched, values }) => (
          <Form>
            <AvatarWrapper>
              <ImgAvatar src={initialValues.avatarURL} alt="avatar" />
            </AvatarWrapper>
            <Container>
              <WrapperField>
                <Label htmlFor="name"> Name:</Label>

                <ProfileField type="text" name="name" placeholder={initialValues.name} />
              </WrapperField>
              {errors.name && touched.name ? (
                <ErrorMassege>{errors.name}</ErrorMassege>
              ) : !errors.name && touched.name && values.name !== user?.name ? (
                <ErrorMassege>Great</ErrorMassege>
              ) : (
                ''
              )}
            </Container>

            <WrapperField>
              <Label htmlFor="email"> Email:</Label>
              <ProfileField type="email" name="email" placeholder={initialValues.email} />
            </WrapperField>

            <WrapperField>
              <Label htmlFor="date"> Birthday:</Label>
              <ProfileField type="numder" name="birthday" placeholder={initialValues.birthday} />
            </WrapperField>

            <WrapperField>
              <Label htmlFor="phone"> Phone:</Label>
              <ProfileField placeholder={initialValues.phone} type="phone" name="phone" />
            </WrapperField>

            <WrapperField>
              <Label htmlFor="city"> City:</Label>
              <ProfileField type="text" name="city" placeholder={initialValues.city} />
            </WrapperField>

            <SubmitBtn type="submit" disabled={!dirty}>
              Save
            </SubmitBtn>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};
