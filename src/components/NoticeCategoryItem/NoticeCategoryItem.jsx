import { NavLink } from 'react-router-dom';
import Icon from '../../utils/Icon/Icon';
import React, { useState } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import { CategoriesContainer, CategoriesName, NoticesItemThumb, DiscriptionList } from './NoticeCategoryItem.styled';

const NoticeCategoryItem = ({ responseByCategory }) => {
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState('');

  const { _id, comments, title, birthday, category, location, name, owner, sex, type, avatarURL } = responseByCategory;
  // const { title, category, avatarURL } = responseByCategory;

  const openModal = () => {
    setShowModal(showModal => !showModal);
    setIdCard(_id);
  };

  const givenDate = new Date(birthday);
  const currentDate = new Date();
  const timeDiff = currentDate - givenDate;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const yearsDiff = Math.floor(timeDiff / millisecondsPerYear);

  return (
    <div>
      <NoticesItemThumb>
        <img src={avatarURL} alt="pets avatar" />
        <CategoriesContainer>
          {category !== 'for-free' ? (
            <CategoriesName>{category}</CategoriesName>
          ) : (
            <CategoriesName>in goood hands</CategoriesName>
          )}
        </CategoriesContainer>
        <DiscriptionList>
          <li>{location}</li>
          {yearsDiff === 1 ? <li>{`${yearsDiff} year`}</li> : <li>{`${yearsDiff} years`}</li>}
          <li>{sex}</li>
        </DiscriptionList>
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
