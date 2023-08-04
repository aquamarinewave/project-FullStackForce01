/* eslint-disable react-hooks/exhaustive-deps */
import { Formik, Form } from 'formik';
import * as React from 'react';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { ModalUserEdit } from '../ModalUserFormData/UserEdit/UserEdit';
import {
  Label,
  AvatarWrapper,
  ImgAvatar,
  ProfileField,
  WrapperCard,
  WrapperField,
  ImgWrapper,
  Wrapper,
} from './UserData.styled';
import avatarDefault from '../../images/profilephotos/avatar-default.png';

const UserData = () => {
  const user = useSelector(authSelector.userSelector);

  const initialValues = {
    avatarURL: user?.avatarURL || { avatarDefault },
    name: user?.name || 'Enter your name',
    email: user?.email || 'example@mail.com',
    phone: user?.phone || '+380000000000',
    birthday: user?.birthday || '2000-01-01',
    city: user?.city || '-',
  };

  return (
    <WrapperCard>
      <ModalUserEdit />
      <Formik initialValues={initialValues} enableReinitialize>
        <Form>
          <Wrapper>
            <div>
              <AvatarWrapper>
                <ImgWrapper>
                  <ImgAvatar src={initialValues.avatarURL} alt="avatar" />
                </ImgWrapper>
              </AvatarWrapper>
            </div>
            <div>
              <WrapperField>
                <Label htmlFor="name"> Name:</Label>

                <ProfileField type="text" id="name" name="name" placeholder={initialValues.name} readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="email"> Email:</Label>
                <ProfileField type="email" id="email" name="email" placeholder={initialValues.email} readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="date"> Birthday:</Label>
                <ProfileField
                  type="date"
                  id="date"
                  name="birthday"
                  placeholder={initialValues.birthday}
                  readOnly={true}
                />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="phone"> Phone:</Label>

                <ProfileField placeholder={initialValues.phone} id="phone" type="phone" name="phone" readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="city"> City:</Label>
                <ProfileField type="text" name="city" id="city" placeholder={initialValues.city} readOnly={true} />
              </WrapperField>
            </div>
          </Wrapper>
        </Form>
      </Formik>
    </WrapperCard>
  );
};

export default UserData;
