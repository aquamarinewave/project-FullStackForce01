import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
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
  IconHeart,
  IconDelete,
  DeleteBtn,
  InfoTitle,
  InfoDesc,
  Subtitle,
} from './NoticeCategoryItem.styled';
import sprite from '../../images/icons.svg';
import noticesOperations from 'redux/notices/operation';
import authSelector from '../../redux/auth/authSelector';
import noticesSelector from '../../redux/notices/noticesSelector';

const NoticeCategoryItem = ({ notices }) => {
  const dispatch = useDispatch();
  const favoriteNoticeStore = useSelector(noticesSelector.getNotice);

  console.log(favoriteNoticeStore);

  const { _id, title, birthday, category, location, sex, avatarURL } = notices;
  const { categoryName } = useParams();

  const [idPet, setIdPet] = useState('');

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [isModalOpenAttention, setIsModalOpenAttention] = useState(false);
  const [isSelected, setIsSelected] = useState(() => {
    const saved = localStorage.getItem(`pet_${_id}`);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  const onDelete = () => {
    dispatch(noticesOperations.deleteUserNotice(_id));
    setShowDeleteModal(showDeleteModal => !showDeleteModal);
    setIdPet(_id);
  };

  const openModal = () => {
    dispatch(noticesOperations.fetchModalDetails(_id));
    setShowModal(showModal => !showModal);
  };

  const openModalForDelete = () => {
    setShowDeleteModal(showDeleteModal => !showDeleteModal);
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
    };

    if (isLoggedIn) {
      if (!isSelected) {
        dispatch(noticesOperations.fetchAddToFavorite(addToFavoriteValue));
        setIsSelected(!isSelected);
      } else {
        dispatch(noticesOperations.fetchDeleteToFavorite(_id));
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
              <IconHeart width={24} height={24} isSelected = {isSelected} isLoggedIn = {isLoggedIn}>
                <use href={`${sprite}#icon-heart`}></use>
              </IconHeart>
            </AddToFavoriteBtn>
          </FavoriteBtnContainer>
          {categoryName === 'own' && (
            <FavoriteBtnContainer>
              <DeleteBtn type="button" onClick={openModalForDelete}>
                <IconDelete width={24} height={24}>
                  <use href={`${sprite}#icon-trash-2`}></use>
                </IconDelete>
              </DeleteBtn>
            </FavoriteBtnContainer>
          )}
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
        handleAddToFavorite={handleAddToFavorite}
        idPetAd={_id}
        favoriteNoticeStore={favoriteNoticeStore}
        isLoggedIn={isLoggedIn}
        isModalOpenAttention={isModalOpenAttention}
        closeModalAttention={closeModalAttention}
        isSelected = {isSelected}
      />
      {showDeleteModal && (
        <ModalApproveAction
          isOpen={showDeleteModal}
          onRequestClose={openModalForDelete}
          onApprove={onDelete}
          idCard={idPet}
          btnIconColor={'var(--bg-color)'}
          btnIconName={'icon-trash-2'}
        >
          <InfoTitle> Delete your pet?</InfoTitle>
          <InfoDesc>
            Are you sure you want to delete pet <Subtitle>{title}</Subtitle>?
          </InfoDesc>
          <InfoDesc>You can`t undo this action.</InfoDesc>
        </ModalApproveAction>
      )}
    </>
  );
};

export default NoticeCategoryItem;
