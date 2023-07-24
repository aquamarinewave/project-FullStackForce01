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
  Div,
  Diiv,
} from './UserForm.styled';
import avatarDefault from '../../images/profilePhoto/avatarDefault.png';
import { Edit } from './Icon/Icon';
// const inputs = [
//   { type: 'text', name: 'name', placeholder: 'Enter your name' },
//   { type: 'text', name: 'email', placeholder: 'example@mail.com' },
//   { type: 'date', name: 'birthday', placeholder: '01.01.2000' },
//   { type: 'tel', name: 'phone', placeholder: '+380000000000' },
//   { type: 'text', name: 'city', placeholder: 'Kyiv' },
// ];
const UserForm = () => {
  return (
    <>
      <Div>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <Formik>
            <Form>
              <AvatarWrapper>
                <EditButton>
                  <Edit />
                </EditButton>
                <ImgAvatar src={avatarDefault} alt="avatar" />
              </AvatarWrapper>

              <Diiv>
                <Label htmlFor="text"> Name:</Label>

                <ProfileField type="text" name="text" placeholder="Enter your name" readOnly={true} />
              </Diiv>
              <Diiv>
                <Label htmlFor="email"> Email:</Label>
                <ProfileField type="email" name="email" placeholder="example@mail.com" readOnly={true} />
              </Diiv>
              <Diiv>
                <Label htmlFor="date"> Birthday:</Label>
                <ProfileField type="numder" name="birthday" placeholder="01.01.2000" readOnly={true} />
              </Diiv>

              <Diiv>
                <Label htmlFor="phone"> Phone:</Label>

                <ProfileField placeholder="+380000000000" type="phone" name="phone" readOnly={true} />
              </Diiv>

              <Diiv>
                <Label htmlFor="email"> City:</Label>
                <ProfileField type="email" name="email" placeholder="Kyiv" readOnly={true} />
              </Diiv>
            </Form>
          </Formik>
        </ProfileInfo>
      </Div>
    </>
  );
};

export default UserForm;
