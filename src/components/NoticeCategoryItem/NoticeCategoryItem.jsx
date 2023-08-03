import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import ModalAttention from 'components/ModalAttention/ModalAttention';
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

const NoticeCategoryItem = ({ notice }) => {
  const dispatch = useDispatch();
  const { _id, title, birthday, category, location, sex, avatarURL, favorite, allowDelete } = notice;
  const { categoryName } = useParams();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [isModalOpenAttention, setIsModalOpenAttention] = useState(false);
  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  const onDelete = () => {
    dispatch(noticesOperations.deleteUserNotice(_id));
    setShowDeleteModal(false);
  };

  const openDetailsModal = () => {
    dispatch(noticesOperations.fetchModalDetails(_id));
    setShowNoticeModal(true);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
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
      if (!favorite) {
        dispatch(noticesOperations.fetchAddToFavorite(_id));
      } else {
        dispatch(noticesOperations.fetchDeleteToFavorite(_id));
        if (categoryName === 'favorite') {
          dispatch(noticesOperations.removeNotice(_id));
        }
      }
    } else {
      setShowNoticeModal(false);
      setIsModalOpenAttention(true);
    }
  };

  const categoryOnCart = {
    'sell': 'sell',
    'for-free': 'In good hands',
    'lost-found': 'lost/found',
  };

  return (
    <>
      <NoticesItemThumb>
        <Img src={avatarURL} alt="pets avatar" width={280} height={290} />
        <CategoriesContainer>
          <CategoriesName>{categoryOnCart[category]}</CategoriesName>
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
          {yearsDiff === 1 ? (
            <DiscriptionItem>
              <IconConatiner>
                <IconSvg width={24} height={24}>
                  <use href={`${sprite}#icon-clock`}></use>
                </IconSvg>
              </IconConatiner>
              <TextContainer>{`${yearsDiff} year`}</TextContainer>
            </DiscriptionItem>
          ) : yearsDiff === 0 ? (
            <DiscriptionItem>
              <IconConatiner>
                <IconSvg width={24} height={24}>
                  <use href={`${sprite}#icon-clock`}></use>
                </IconSvg>
              </IconConatiner>
              <TextContainer>&lt;1 year</TextContainer>
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
              <IconHeart width={24} height={24} isSelected={favorite} isLoggedIn={isLoggedIn}>
                <use href={`${sprite}#icon-heart`}></use>
              </IconHeart>
            </AddToFavoriteBtn>
          </FavoriteBtnContainer>
          {allowDelete && (
            <FavoriteBtnContainer>
              <DeleteBtn type="button" onClick={openDeleteModal}>
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
        <LearnMoreBtn type="button" onClick={openDetailsModal}>
          Learn more
        </LearnMoreBtn>
      </ContentContainer>
      {showNoticeModal && (
        <ModalNotice
          isOpen={showNoticeModal}
          onRequestClose={() => setShowNoticeModal(false)}
          handleAddToFavorite={handleAddToFavorite}
          notice={notice}
        />
      )}

      {isModalOpenAttention && <ModalAttention onClose={closeModalAttention} />}

      <ModalApproveAction
        isOpen={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
        onApprove={onDelete}
        btnIconStroke={'var(--bg-color)'}
        btnIconColor={'var(--dark-blue)'}
        btnIconName={'icon-trash-2'}
      >
        <InfoTitle> Delete your pet?</InfoTitle>
        <InfoDesc>
          Are you sure you want to delete pet <Subtitle>{title}</Subtitle>?
        </InfoDesc>
        <InfoDesc>You can`t undo this action.</InfoDesc>
      </ModalApproveAction>
    </>
  );
};

export default NoticeCategoryItem;
