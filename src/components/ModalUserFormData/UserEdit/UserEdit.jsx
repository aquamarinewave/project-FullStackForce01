import React, { useState } from 'react';
import sprite from 'images/icons.svg';
import { EditButton, IconEdit } from './UserEditStyled';

import ModalUser from '../ModalUser/ModalUser';
import { UserForm } from 'components/UserForm/UserForm';

export const ModalUserEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <EditButton onClick={toggleModal}>
        <IconEdit width={24} height={24}>
          <use href={`${sprite}#icon-edit-2`}></use>
        </IconEdit>
      </EditButton>
      {isModalOpen && (
        <ModalUser isOpen={isModalOpen} toggleModal={toggleModal} onRequestClose={toggleModal}>
          <UserForm toggleModal={toggleModal} />
        </ModalUser>
      )}
    </>
  );
};
