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
  BtnContainer,
  Img,
  TextContainer,
  Title,
  LearnMoreBtn,
  ContentContainer,
  IconHearts,
  IconDelete,
  DeleteBtn,
} from './NoticeCategoryItem.styled';
import sprite from '../../images/icons.svg';

import authSelector from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import { fetchModalDetail, fetchAddToFavorite, fetchDeleteToFavorite } from '../../services/api/modalNotice';

const NoticeCategoryItem = ({ notices }) => {
  const { _id, title, birthday, category, location, sex, avatarURL } = notices;

  const [showModal, setShowModal] = useState(false);
  const [valueModalInfo, setValueModalInfo] = useState({});
  const [userModalInfo, setUserModalInfo] = useState({});
  const [isSelected, setIsSelected] = useState(() => {
    const saved = localStorage.getItem(`pet_${_id}`);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  const [isModalOpenAttention, setIsModalOpenAttention] = useState(false);

  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  useEffect(() => {
    async function fetchModalDetailPet() {
      try {
        const data = await fetchModalDetail(_id);
        setValueModalInfo({ ...data.notice });
        setUserModalInfo({ ...data.user });
      } catch (error) {
        console.log(error);
      }
    }
    fetchModalDetailPet();
  }, [_id]);

  const openModal = () => {
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
    if (isLoggedIn) {
      if (isSelected) {
        fetchDeleteToFavorite(_id);
        setIsSelected(!isSelected);
      } else {
        fetchAddToFavorite(_id, valueModalInfo);
        setIsSelected(!isSelected);
      }
    } else {
      setShowModal(false);
      setIsModalOpenAttention(true);
    }
  };

  localStorage.setItem(`pet_${_id}`, JSON.stringify(isSelected));

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
        <BtnContainer>
          <FavoriteBtnContainer>
            <AddToFavoriteBtn type="button" onClick={handleAddToFavorite}>
              <IconHearts width={24} height={24} isSelected={isSelected}>
                <use href={`${sprite}#icon-heart`}></use>
              </IconHearts>
            </AddToFavoriteBtn>
          </FavoriteBtnContainer>
          <FavoriteBtnContainer>
            <DeleteBtn type="button">
              <IconDelete width={24} height={24}>
                <use href={`${sprite}#icon-trash-2`}></use>
              </IconDelete>
            </DeleteBtn>
          </FavoriteBtnContainer>
        </BtnContainer>
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
        closeModalAttention={closeModalAttention}
      />
    </>
  );
};

export default NoticeCategoryItem;
