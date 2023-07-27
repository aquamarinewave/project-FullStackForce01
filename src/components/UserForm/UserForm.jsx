import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import Modal from 'components/ModalApproveAction/ModalApproveAction';

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
  IconLogOut,
  LogOutBtn,
  LogOutBtnText,
} from './UserForm.styled';
import avatarDefault from '../../images/profilephotos/avatar-default.png';
import sprite from '../../images/icons.svg';
import authOperations from 'redux/auth/operations';

const UserForm = () => {
  const user = useSelector(authSelector.userSelector);
  const initialValues = {
    avatarURL: user?.avatarURL || { avatarDefault },
    name: user?.name || 'Enter your name',
    email: user?.email || 'example@mail.com',
    phone: user?.phone || '+380000000000',
    birthday: user?.birthday || '01.01.2000',
    city: user?.city || 'Kiev',
  };

  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logoutUser());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <WrapperCard>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <EditButton>
            <IconEdit width={24} height={24}>
              <use href={`${sprite}#icon-edit-2`}></use>
            </IconEdit>
          </EditButton>
          <Formik initialValues={initialValues}>
            <Form>
              <AvatarWrapper>
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
          <LogOutBtn onClick={toggleModal}>
            <IconLogOut width={24} height={24}>
              <use href={`${sprite}#icon-logout`}></use>
            </IconLogOut>
            <LogOutBtnText>Log Out</LogOutBtnText>
          </LogOutBtn>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} onApprove={onLogout} onRequestClose={toggleModal}>
              Already leaving?
            </Modal>
          )}
        </ProfileInfo>
      </WrapperCard>
    </>
  );
};

export default UserForm;
