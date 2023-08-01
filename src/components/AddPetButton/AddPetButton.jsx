import sprite from '../../images/icons.svg';
import { AddPet, IconPlusSmall } from './AddPetButton.styled';
import ModalAttention from '../ModalAttention/ModalAttention';
import authSelector from '../../redux/auth/authSelector';
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

const AddPetButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  const handleLinkClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <AddPet to={isLoggedIn && "/add-pet"} onClick={handleLinkClick}>
      Add Pet
      <IconPlusSmall width={24} height={24}>
        <use href={`${sprite}#icon-plus-small`}></use>
      </IconPlusSmall>
    </AddPet>

    {!isLoggedIn && isModalOpen && (<ModalAttention onClose={closeModal}/>)}
    </>
  );
};

export default AddPetButton;
