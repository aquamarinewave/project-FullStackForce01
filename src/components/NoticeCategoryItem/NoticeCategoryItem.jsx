import React, { useState, useEffect } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import {
  CategoriesContainer,
  CategoriesName,
  NoticesItemThumb,
  DiscriptionList,
  DiscriptionItem,
  IconSvg,
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

import authSelector from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import fetchModalDetail from '../ModalNotice/fetchModalDetail';
import fetchAddToFavorite from '../ModalNotice/fetchAddToFavorite';
import fetchDeleteToFavorite from '../ModalNotice/fetchDeleteToFavorite';

const NoticeCategoryItem = ({ notices }) => {
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState('');
  const [valueModalInfo, setValueModalInfo] = useState({});
  const [userModalInfo, setUserModalInfo] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [isModalOpenAttention, setIsModalOpenAttention] = useState(false);

  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  useEffect(() => {
    async function fetchModalDetailPet() {
      try {
        const data = await fetchModalDetail(idCard);
        console.log({ ...data.notice });
        setValueModalInfo({ ...data.notice });
        setUserModalInfo({ ...data.user });
      } catch (error) {
        console.log(error);
      }
    }
    fetchModalDetailPet();

    const savedSelectedState = localStorage.getItem(`pet_${idCard}`);

    if (savedSelectedState !== null) {
      setIsSelected(JSON.parse(savedSelectedState));
    } else {
      setIsSelected(false);
    }
  }, [idCard, isLoggedIn]);

  const { _id, title, birthday, category, location, sex, avatarURL } = notices;

  const openModal = () => {
    setShowModal(showModal => !showModal);
    setIdCard(_id);
  };

  const givenDate = new Date(birthday);
  const currentDate = new Date();
  const timeDiff = currentDate - givenDate;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const yearsDiff = Math.floor(timeDiff / millisecondsPerYear);

  const updateLocalStorage = () => {
    localStorage.setItem(`pet_${idCard}`, JSON.stringify(isSelected));
  };

  useEffect(updateLocalStorage, [isSelected, idCard]);

  const handleAddToFavorite = () => {
    if (isLoggedIn) {
      if (isSelected) {
        fetchDeleteToFavorite(idCard);
        setIsSelected(!isSelected);
      } else {
        fetchAddToFavorite(idCard, valueModalInfo);
        setIsSelected(!isSelected);
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
          <AddToFavoriteBtn type="button" onClick={handleAddToFavorite}>
            <IconSvg width={24} height={24} isSelected={isSelected}>
              <use href={`${sprite}#icon-heart`}></use>
            </IconSvg>
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
        isModalOpenAttention={isModalOpenAttention}
        setIsModalOpenAttention={setIsModalOpenAttention}
        valueModalInfo={valueModalInfo}
        userModalInfo={userModalInfo}
        handleAddToFavorite={handleAddToFavorite}
        isSelected={isSelected}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
};

export default NoticeCategoryItem;
