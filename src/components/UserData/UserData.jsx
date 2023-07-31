/* eslint-disable react-hooks/exhaustive-deps */
import { Formik, Form } from 'formik';
import * as React from 'react';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { ModalUserEdit } from '../ModalUserFormData/UserEdit/UserEdit';
import {
  Label,
  AvatarWrapper,
  ProfileTitle,
  ImgAvatar,
  ProfileField,
  WrapperCard,
  WrapperField,
  ImgWrapper,
} from './UserData.styled';
import avatarDefault from '../../images/profilephotos/avatar-default.png';
import ModalCongrats from '../ModalCongrats/ModalCongrats';
import { TitleModalCongrats, TextModalCongrats } from 'components/ModalCongrats/ModalCongrats.styled';

import { useState } from 'react';
import { useEffect } from 'react';

const UserData = () => {
  const newUser = useSelector(authSelector.newUserSelector);
  const user = useSelector(authSelector.userSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (newUser === true) {
      setIsModalOpen(true);
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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
        <div>
          <ModalUserEdit />
          <Formik initialValues={initialValues} enableReinitialize>
            <Form>
              <AvatarWrapper>
                <ImgWrapper>
                  <ImgAvatar src={initialValues.avatarURL} alt="avatar" />
                </ImgWrapper>
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
                <ProfileField type="date" name="birthday" placeholder={initialValues.birthday} readOnly={true} />
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
        </div>
        {isModalOpen && (
          <ModalCongrats
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            onApprove={toggleModal}
            onRequestClose={toggleModal}
          >
            <TitleModalCongrats>Congrats!</TitleModalCongrats>
            <TextModalCongrats>Your registration is success</TextModalCongrats>
          </ModalCongrats>
        )}
      </WrapperCard>
    </>
  );
};

export default UserData;
