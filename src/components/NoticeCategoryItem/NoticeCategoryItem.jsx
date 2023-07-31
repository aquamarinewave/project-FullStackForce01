import React, { useState, useEffect } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import {
  CategoriesContainer,
  CategoriesName,
  NoticesItemThumb,
  DiscriptionList,
  DiscriptionItem,
  IconSvg,
  IconHeart,
  IconConatiner,
  AddToFavoriteBtn,
  FavoriteBtnContainer,
  AddPet,
  IconPlusSmall,
  Img,
  TextContainer,
  Title,
  LearnMoreBtn,
  ContentContainer,
} from './NoticeCategoryItem.styled';
import sprite from '../../images/icons.svg';
import favoriteOperations from '../../redux/favorite/favoriteOperations';
import {getNotice} from '../../redux/favorite/favoriteSelector';
import {getSelected} from '../../redux/favorite/favoriteSelector';

import authSelector from '../../redux/auth/authSelector';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchModalDetail, fetchAddToFavorite, fetchDeleteToFavorite } from '../../services/api/modalNotice';

const NoticeCategoryItem = ({ notices }) => {
  const dispatch = useDispatch();
  const favoriteNoticeStore = useSelector(getNotice);
  const isSelected = useSelector(getSelected);

  const { _id, title, birthday, category, location, sex, avatarURL } = notices;

  const [showModal, setShowModal] = useState(false);
  const [isModalOpenAttention, setIsModalOpenAttention] = useState(false);

  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  const openModal = () => {
    dispatch(favoriteOperations.fetchModalDetails(_id));
    setShowModal(showModal => !showModal);

  };

  const givenDate = new Date(birthday);
  const currentDate = new Date();
  const timeDiff = currentDate - givenDate;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const yearsDiff = Math.floor(timeDiff / millisecondsPerYear);

  const closeModalAttention = () => {
    setIsModalOpenAttention(!isModalOpenAttention);
  };

  const handleAddToFavorite = () => {
    const addToFavoriteValue = {
      _id,
      favoriteNoticeStore,
    }

    if(isLoggedIn) {

      if(!isSelected) {
        dispatch(favoriteOperations.fetchAddToFavorite( addToFavoriteValue));
      } else {
        dispatch(favoriteOperations.fetchDeleteToFavorite(_id));
      }

    } else {
      setShowModal(false);
      setIsModalOpenAttention(true);
    }

  };

  return (
    <>
      <NoticesItemThumb>
        <Img src={avatarURL} alt="pets avatar" width={280} height={290} />
        <CategoriesContainer>
          {category !== 'for-free' ? (
            <CategoriesName>{category}</CategoriesName>
          ) : (
            <CategoriesName>in goood hands</CategoriesName>
          )}
        </CategoriesContainer>
        <DiscriptionList>
          <DiscriptionItem>
            <IconConatiner>
              <IconSvg width={24} height={24}>
                <use href={`${sprite}#icon-location-1`}></use>
              </IconSvg>
            </IconConatiner>
            <TextContainer>{location}</TextContainer>
          </DiscriptionItem>
          {yearsDiff === 1 || yearsDiff === 0 ? (
            <DiscriptionItem>
              <IconConatiner>
                <IconSvg width={24} height={24}>
                  <use href={`${sprite}#icon-clock`}></use>
                </IconSvg>
              </IconConatiner>
              <TextContainer>{`${yearsDiff} year`}</TextContainer>
            </DiscriptionItem>
          ) : (
            <DiscriptionItem>
              <IconConatiner>
                <IconSvg width={24} height={24}>
                  <use href={`${sprite}#icon-clock`}></use>
                </IconSvg>
              </IconConatiner>
              <TextContainer>{`${yearsDiff} years`}</TextContainer>
            </DiscriptionItem>
          )}
          <DiscriptionItem>
            <IconConatiner>
              <IconSvg width={24} height={24}>
                {sex === 'male' ? <use href={`${sprite}#icon-male`}></use> : <use href={`${sprite}#icon-female`}></use>}
              </IconSvg>
            </IconConatiner>
            <TextContainer>{sex}</TextContainer>
          </DiscriptionItem>
        </DiscriptionList>
        <FavoriteBtnContainer>
          <AddToFavoriteBtn type="button" onClick = {handleAddToFavorite}>
            <IconHeart width={24} height={24}>
              <use href={`${sprite}#icon-heart`}></use>
            </IconHeart>
          </AddToFavoriteBtn>
        </FavoriteBtnContainer>
        <AddPet to="/add-pet">
          <IconPlusSmall width={24} height={24}>
            <use href={`${sprite}#icon-plus`}></use>
          </IconPlusSmall>
          Add Pet
        </AddPet>
      </NoticesItemThumb>
      <ContentContainer>
        <Title>{title}</Title>
        <LearnMoreBtn type="button" onClick={openModal}>
          Learn more
        </LearnMoreBtn>
      </ContentContainer>
      <ModalNotice
        showModal={showModal}
        setShowModal={setShowModal}
        handleAddToFavorite = {handleAddToFavorite}
        idPetAd = {_id}
        favoriteNoticeStore = {favoriteNoticeStore}
        isLoggedIn = {isLoggedIn}
        isModalOpenAttention = {isModalOpenAttention}
        closeModalAttention = {closeModalAttention}
      />
    </>
  );
};

export default NoticeCategoryItem;
