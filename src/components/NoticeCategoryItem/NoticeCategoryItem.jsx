import { NavLink } from 'react-router-dom';
import Icon from '../../utils/Icon/Icon';
import React, { useState } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import { Category, NoticesItemThumb } from './NoticeCategoryItem.styled';

const NoticeCategoryItem = ({ responseByCategory }) => {
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState('');

  // const { _id, comments, title, birthday, category, location, name, owner, sex, type, avatarURL } = responseByCategory;
  const { _id, title, category, avatarURL } = responseByCategory;

  const openModal = () => {
    setShowModal(showModal => !showModal);
    setIdCard(_id);
  };

  return (
    <div>
      <NoticesItemThumb>
        <img src={avatarURL} alt="pets avatar" />
        <Category>{category}</Category>
        <button type="button">
          <Icon name="heart" color="var(--dark-blue)" size={18} />
        </button>
        <NavLink to="/add-pet">Add pet</NavLink>
      </NoticesItemThumb>
      <h3>{title}</h3>
      <button type="button" onClick={openModal}>
        Learn more
      </button>
      <ModalNotice showModal={showModal} setShowModal={setShowModal} idCard={idCard} />
    </div>
  );
};

export default NoticeCategoryItem;
