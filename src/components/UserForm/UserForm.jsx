import { Formik, Form } from 'formik';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/auth/authSelector';

import {
  ProfileInfo,
  Label,
  AvatarWrapper,
  ProfileTitle,
  EditButton,
  ImgAvatar,
  ProfileField,
  WrapperCard,
  WrapperField,
  IconEdit,
} from './UserForm.styled';
import avatarDefault from '../../images/profilephotos/avatar-default.png';
import sprite from '../../images/icons.svg';

const UserForm = () => {
  const user = useSelector(userSelector);
  const initialValues = {
    avatarURL: user?.avatarURL || { avatarDefault },
    name: user?.name || 'Enter your name',
    email: user?.email || 'example@mail.com',
    phone: user?.phone || '+380000000000',
    birthday: user?.birthday || '01.01.2000',
    city: user?.city || 'Kiev',
  };

  return (
    <>
      <WrapperCard>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <Formik initialValues={initialValues}>
            <Form>
              <AvatarWrapper>
                <EditButton>
                  <IconEdit width={24} height={24}>
                    <use href={`${sprite}#icon-edit-2`}></use>
                  </IconEdit>
                </EditButton>
                <ImgAvatar src={initialValues.avatarURL} alt="avatar" />
              </AvatarWrapper>

              <WrapperField>
                <Label htmlFor="name"> Name:</Label>

                <ProfileField type="text" name="name" placeholder={initialValues.name} readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="email"> Email:</Label>
                <ProfileField type="email" name="email" placeholder={initialValues.email} readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="date"> Birthday:</Label>
                <ProfileField type="numder" name="birthday" placeholder={initialValues.birthday} readOnly={true} />
              </WrapperField>

              <WrapperField>
                <Label htmlFor="phone"> Phone:</Label>

                <ProfileField placeholder={initialValues.phone} type="phone" name="phone" readOnly={true} />
              </WrapperField>

              <WrapperField>
                <Label htmlFor="city"> City:</Label>
                <ProfileField type="text" name="city" placeholder={initialValues.city} readOnly={true} />
              </WrapperField>
            </Form>
          </Formik>
        </ProfileInfo>
      </WrapperCard>
    </>
  );
};

export default UserForm;
