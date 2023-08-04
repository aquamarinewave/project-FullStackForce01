import { Formik, Form } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import authSelector from 'redux/auth/authSelector';
import avatarDefault from 'images/profilephotos/avatar-default.png';
import { useSelector, useDispatch } from 'react-redux';
import { AvatarWrapper, WrapperField, Label, ProfileField, ImgWrapper } from '../UserData/UserData.styled';
import {
  SubmitBtn,
  Container,
  ErrorMassege,
  InputWrapper,
  EditText,
  EditButton,
  IconCameraBtn,
  IconCrossSmall,
  IconCheck,
  BtnConfirm,
  BtnDecline,
  ApproveContainer,
  IconCamera,
  ApprovedMassege,
  IconCheckForm,
  IconCheckBirthday,
  WrapperModalCard,
  ImgAvatarForm,
} from './UserForm.styled';
import { updateUser } from 'redux/auth/operations';

import toast from 'react-hot-toast';

import sprite from '../../images/icons.svg';

export const UserForm = ({ toggleModal }) => {
  const [editAvatar, setEditAvatar] = useState(false);
  const user = useSelector(authSelector.userSelector);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [newAvatar, setNewAvatar] = useState('');
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const dispatch = useDispatch();

  function peviewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setNewAvatar(reader.result);
    };
  }

  useEffect(() => {
    if (newAvatar) {
      setIsUpdateForm(true);
    }
  }, [newAvatar]);

  const handleChange = e => {
    const file = e.target.files[0];
    setAvatarUrl(file);

    peviewFile(file);
    setEditAvatar(true);
  };

  const initialValues = {
    avatarURL: user?.avatarURL || { avatarDefault },
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthday: user?.birthday || '',
    city: user?.city || '',
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    try {
      if (newAvatar) {
        formData.append('avatar', avatarUrl);
      }
      if (initialValues.name !== values.name && values.name) {
        formData.append('name', values.name);
      }
      if (initialValues.email !== values.email && values.email) {
        formData.append('email', values.email);
      }

      if (initialValues.birthday !== values.birthday && values.birthday) {
        formData.append('birthday', values.birthday);
      }
      if (initialValues.phone !== values.phone) {
        formData.append('phone', values.phone);
      }
      if (initialValues.city !== values.city) formData.append('city', values.city);
      const res = await dispatch(updateUser(formData));

      toggleModal();

      if (res.meta.requestStatus === 'fulfilled') {
        toast.success('User data updated!');
      }
      if (res.error.message === 'Rejected') {
        toast.error('This email is already used!', {});
        return toggleModal(false);
      }

      resetForm();
    } catch (e) {}
  };

  const today = new Date();

  const validateDate = dateString => {
    const selectedDate = new Date(dateString);

    if (isNaN(selectedDate.getTime())) {
      return false;
    }
    return selectedDate <= today;
  };
  const shema = yup.object().shape({
    name: yup.string().max(16, 'Name must be less than 16 characters').trim().required('Please enter your name'),
    email: yup.string().email('Incorrect email').required('Please enter your email'),
    phone: yup
      .string()
      .matches(/^\+?3?8?(0\d{9})$/, 'Phone format: +380000000000')
      .max(13, 'Phone format: +380000000000')
      .min(13, 'Phone format: +380000000000'),
    city: yup.string().max(16, 'Name must be less than 16 characters').trim(),
    birthday: yup
      .date()
      .required('Type is required')
      .test('is-future-date', 'Please select a past or today date', validateDate),
  });

  return (
    <div>
      <Formik initialValues={initialValues} dirty validationSchema={shema} onSubmit={handleFormSubmit}>
        {({ dirty, errors, touched, values }) => (
          <Form>
            <WrapperModalCard>
              <div>
                <AvatarWrapper>
                  {newAvatar ? (
                    <ImgWrapper>
                      <ImgAvatarForm src={newAvatar} alt="avatar" />
                    </ImgWrapper>
                  ) : (
                    <ImgWrapper>
                      <ImgAvatarForm src={initialValues.avatarURL} alt="avatar" />
                    </ImgWrapper>
                  )}
                  {editAvatar ? (
                    <ApproveContainer>
                      <BtnConfirm
                        onClick={() => {
                          setEditAvatar(false);
                        }}
                      >
                        <IconCheck width={24} height={24}>
                          <use href={`${sprite}#icon-check`}></use>
                        </IconCheck>
                      </BtnConfirm>
                      <p>Confirm</p>
                      <BtnDecline
                        onClick={() => {
                          setAvatarUrl(user?.avatarURL || { avatarDefault });
                          setNewAvatar('');
                          setEditAvatar(false);
                          setIsUpdateForm(false);
                        }}
                      >
                        <IconCrossSmall width={24} height={24}>
                          <use href={`${sprite}#icon-cross-small`}></use>
                        </IconCrossSmall>
                      </BtnDecline>
                    </ApproveContainer>
                  ) : (
                    <EditButton>
                      <InputWrapper
                        type="file"
                        id="fileInput"
                        onChange={e => handleChange(e)}
                        accept="image/png, image/jpeg, image/jpg, image/jfif"
                      />
                      <IconCameraBtn>
                        <IconCamera width={24} height={24}>
                          <use href={`${sprite}#icon-camera`}></use>
                        </IconCamera>
                        <EditText>Edit photo</EditText>
                      </IconCameraBtn>
                    </EditButton>
                  )}
                </AvatarWrapper>
              </div>
              <div>
                <Container>
                  <WrapperField>
                    <Label htmlFor="name"> Name:</Label>

                    <ProfileField type="text" name="name" placeholder="Enter your name" />
                  </WrapperField>
                  {errors.name && touched.name ? (
                    <ErrorMassege>{errors.name}</ErrorMassege>
                  ) : !errors.name && touched.name && values.name !== user?.name ? (
                    <ApprovedMassege>
                      <span>
                        <IconCheckForm width={24} height={24}>
                          <use href={`${sprite}#icon-check`}></use>
                        </IconCheckForm>
                      </span>
                    </ApprovedMassege>
                  ) : (
                    ''
                  )}
                </Container>
                <Container>
                  <WrapperField>
                    <Label htmlFor="email"> Email:</Label>
                    <ProfileField type="email" name="email" placeholder="Enter your email" />
                    {errors.email && touched.name ? (
                      <ErrorMassege>{errors.email}</ErrorMassege>
                    ) : !errors.email && touched.email && values.email !== user?.email ? (
                      <ApprovedMassege>
                        <span>
                          <IconCheckForm width={24} height={24}>
                            <use href={`${sprite}#icon-check`}></use>
                          </IconCheckForm>
                        </span>
                      </ApprovedMassege>
                    ) : (
                      ''
                    )}
                  </WrapperField>
                </Container>
                <Container>
                  <WrapperField>
                    <Label htmlFor="date"> Birthday:</Label>
                    <ProfileField type="date" name="birthday" placeholder="01.01.2000" />
                    {errors.birthday && touched.birthday ? (
                      <ErrorMassege>{errors.birthday}</ErrorMassege>
                    ) : !errors.birthday && touched.birthday && values.birthday !== user?.birthday ? (
                      <ApprovedMassege>
                        <span>
                          <IconCheckBirthday width={24} height={24}>
                            <use href={`${sprite}#icon-check`}></use>
                          </IconCheckBirthday>
                        </span>
                      </ApprovedMassege>
                    ) : (
                      ''
                    )}
                  </WrapperField>
                </Container>
                <Container>
                  <WrapperField>
                    <Label htmlFor="phone"> Phone:</Label>
                    <ProfileField placeholder="+380000000000" type="phone" name="phone" />
                    {errors.phone && touched.phone ? (
                      <ErrorMassege>{errors.phone}</ErrorMassege>
                    ) : !errors.phone && touched.phone && values.phone !== user?.phone ? (
                      <ApprovedMassege>
                        <span>
                          <IconCheckForm width={24} height={24}>
                            <use href={`${sprite}#icon-check`}></use>
                          </IconCheckForm>
                        </span>
                      </ApprovedMassege>
                    ) : (
                      ''
                    )}
                  </WrapperField>
                </Container>
                <Container>
                  <WrapperField>
                    <Label htmlFor="city"> City:</Label>
                    <ProfileField type="string" name="city" placeholder="Enter your city" />
                    {errors.city && touched.city ? (
                      <ErrorMassege>{errors.city}</ErrorMassege>
                    ) : !errors.city && touched.city && values.city !== user?.city ? (
                      <ApprovedMassege>
                        <span>
                          <IconCheckForm width={24} height={24}>
                            <use href={`${sprite}#icon-check`}></use>
                          </IconCheckForm>
                        </span>
                      </ApprovedMassege>
                    ) : (
                      ''
                    )}
                  </WrapperField>
                </Container>
              </div>
              <SubmitBtn type="submit" disabled={!dirty && !isUpdateForm}>
                Save
              </SubmitBtn>
            </WrapperModalCard>
          </Form>
        )}
      </Formik>
    </div>
  );
};
