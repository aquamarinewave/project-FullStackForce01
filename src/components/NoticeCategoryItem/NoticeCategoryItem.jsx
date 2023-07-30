import React, { useState } from 'react';
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
  TextContainer,
  Title,
  LearnMoreBtn,
  ContentContainer,
} from './NoticeCategoryItem.styled';
import sprite from '../../images/icons.svg';

const NoticeCategoryItem = ({ responseByCategory }) => {
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState('');

  const { _id, title, birthday, category, location, sex, avatarURL } = responseByCategory;

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
    <>
      <NoticesItemThumb>
        <img src={avatarURL} alt="pets avatar" width={280} height={290} />
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
              {`${yearsDiff} year`}
            </DiscriptionItem>
          ) : (
            <DiscriptionItem>
              <IconConatiner>
                <IconSvg width={24} height={24}>
                  <use href={`${sprite}#icon-clock`}></use>
                </IconSvg>
              </IconConatiner>
              <TextContainer>{`${yearsDiff} year`}</TextContainer>
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
          <AddToFavoriteBtn type="button">
            <IconSvg width={24} height={24}>
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

      <ModalNotice showModal={showModal} setShowModal={setShowModal} idCard={idCard} />
    </>
  );
};

export default NoticeCategoryItem;
