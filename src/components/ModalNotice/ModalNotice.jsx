import React, { useRef, useEffect, useCallback } from 'react';
import {Background , ModalWrapper, ModalContent, ModalInfo, ModalImg, ModalAvatar, ModalCategory, ModalHeader, ModalInfoList, ModalInfoItemName, ModalInfoItemValue, ModalContact, ModalComments, ModalButtons, ModalPhone, ModalButtonAdd, CloseModalButton,  IconHeart, IconCross} from './ModalNotice.styled';
import ModalAttention from './ModalAttention';
import sprite from '../../images/icons.svg';

export const ModalNotice = ({ 
  showModal, 
  setShowModal,
  isModalOpenAttention,
  closeModalAttention,
  valueModalInfo,
  userModalInfo,
  handleAddToFavorite,
  isSelected,
  isLoggedIn
}) => {

  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );


  const {title, name, birthday, type, sex, location, comments, avatarURL, category} = valueModalInfo;

  const {email, phone} = userModalInfo;


  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
              <ModalContent>
                <ModalInfo>
                  <ModalImg>
                    <ModalAvatar src={avatarURL} alt={name} />
                    <ModalCategory>{category}</ModalCategory>
                  </ModalImg>
                  
                  <div>
                    <ModalHeader>{title || "Сute pet looking for a home"}</ModalHeader>
                    <ModalInfoList>
                    <ModalInfoItemName>
                      <li><strong>Name:</strong></li>
                      <li><strong>Birthday:</strong></li>
                      <li><strong>Type:</strong></li>
                      <li><strong>Place:</strong></li>
                      <li><strong>The sex:</strong></li>
                      <li><strong>Email:</strong></li>
                      <li><strong>Phone:</strong></li>
                    </ModalInfoItemName>

                    <ModalInfoItemValue>
                      <li>{name || "empty"}</li>
                      <li>{birthday || "empty"}</li>
                      <li>{type || "empty"}</li>
                      <li>{location || "empty"}</li>
                      <li>{sex || "empty"}</li>
                      <ModalContact>
                        <a href={`mailto: ${email}`}>{email || "email@gamil.com"}</a>
                      </ModalContact>
                      <ModalContact>
                        <a href={`tel: ${phone}`}>{phone || "+380 (XXX) (XXXXXXXX)"}</a>
                      </ModalContact>
                    </ModalInfoItemValue>
                    </ModalInfoList>
                  </div>
                </ModalInfo>

                <ModalComments><strong>Comments:</strong> {comments}</ModalComments>

                <ModalButtons>
                  <ModalPhone href={`tel: ${phone}`}>Contact</ModalPhone>

                  <ModalButtonAdd onClick={handleAddToFavorite} isSelected = {isSelected} isLoggedIn = {isLoggedIn}><span>{isSelected && isLoggedIn? "Delete" : "Add"}</span> <span>  
                  <IconHeart width={24} height={24} isSelected = {isSelected} isLoggedIn = {isLoggedIn}>
                    <use href={`${sprite}#icon-heart`}></use>
                  </IconHeart>
                  </span>
                  </ModalButtonAdd>

                </ModalButtons>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              >
                <IconCross width={24} height={24}>
                  <use href={`${sprite}#icon-cross`}></use>
                </IconCross>
              </CloseModalButton>
          </ModalWrapper>          
        </Background>
      ) : null}
      
    {isModalOpenAttention ? (<ModalAttention onClose={closeModalAttention}/>) : null}
    </>
    
  );
};
