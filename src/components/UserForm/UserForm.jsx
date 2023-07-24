import { Formik, Form } from 'formik';
import * as React from 'react';

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
import avatarDefault from '../../images/profilePhoto/avatarDefault.png';
import sprite from '../../images/icons.svg';

const UserForm = () => {
  return (
    <>
      <WrapperCard>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <Formik>
            <Form>
              <AvatarWrapper>
                <EditButton>
                  <IconEdit width={24} height={24}>
                    <use href={`${sprite}#icon-edit-2`}></use>
                  </IconEdit>
                </EditButton>
                <ImgAvatar src={avatarDefault} alt="avatar" />
              </AvatarWrapper>

              <WrapperField>
                <Label htmlFor="text"> Name:</Label>

                <ProfileField type="text" name="text" placeholder="Enter your name" readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="email"> Email:</Label>
                <ProfileField type="email" name="email" placeholder="example@mail.com" readOnly={true} />
              </WrapperField>
              <WrapperField>
                <Label htmlFor="date"> Birthday:</Label>
                <ProfileField type="numder" name="birthday" placeholder="01.01.2000" readOnly={true} />
              </WrapperField>

              <WrapperField>
                <Label htmlFor="phone"> Phone:</Label>

                <ProfileField placeholder="+380000000000" type="phone" name="phone" readOnly={true} />
              </WrapperField>

              <WrapperField>
                <Label htmlFor="email"> City:</Label>
                <ProfileField type="email" name="email" placeholder="Kyiv" readOnly={true} />
              </WrapperField>
            </Form>
          </Formik>
        </ProfileInfo>
      </WrapperCard>
    </>
  );
};

export default UserForm;
