import React, { useRef, useEffect, useCallback } from 'react';
import {
  Background,
  ModalWrapper,
  ModalContent,
  ModalInfo,
  ModalImg,
  ModalAvatar,
  ModalCategory,
  ModalHeader,
  ModalInfoList,
  ModalInfoItemName,
  ModalInfoItemValue,
  ModalContact,
  ModalComments,
  ModalButtons,
  ModalPhone,
  ModalButtonAdd,
  CloseModalButton,
  IconHeart,
  IconCross,
} from './ModalNotice.styled';
import ModalAttention from '../ModalAttention/ModalAttention';
import sprite from '../../images/icons.svg';

export const ModalNotice = ({
  showModal,
  setShowModal,
  handleAddToFavorite,
  favoriteNoticeStore,
  isLoggedIn,
  isModalOpenAttention,
  closeModalAttention,
  isSelected,
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

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const { notice, user } = favoriteNoticeStore;

  return (
    <>
      {showModal && notice ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalContent>
              <ModalInfo>
                <ModalImg>
                  <ModalAvatar src={notice.avatarURL} alt={notice.name} />
                  <ModalCategory>{notice.category}</ModalCategory>
                </ModalImg>

                <div>
                  <ModalHeader>{notice.title || 'Сute pet looking for a home'}</ModalHeader>
                  <ModalInfoList>
                    <ModalInfoItemName>
                      <li>
                        <strong>Name:</strong>
                      </li>
                      <li>
                        <strong>Birthday:</strong>
                      </li>
                      <li>
                        <strong>Type:</strong>
                      </li>
                      <li>
                        <strong>Place:</strong>
                      </li>
                      <li>
                        <strong>The sex:</strong>
                      </li>
                      <li>
                        <strong>Email:</strong>
                      </li>
                      <li>
                        <strong>Phone:</strong>
                      </li>
                    </ModalInfoItemName>

                    <ModalInfoItemValue>
                      <li>{notice.name || 'empty'}</li>
                      <li>{notice.birthday || 'empty'}</li>
                      <li>{notice.type || 'empty'}</li>
                      <li>{notice.location || 'empty'}</li>
                      <li>{notice.sex || 'empty'}</li>
                      <ModalContact>
                        <a href={`mailto: ${user.email}`}>{user.email || 'email@gamil.com'}</a>
                      </ModalContact>
                      <ModalContact>
                        <a href={`tel: ${user.phone}`}>{user.phone || '+380 (XXX) (XXXXXXXX)'}</a>
                      </ModalContact>
                    </ModalInfoItemValue>
                  </ModalInfoList>
                </div>
              </ModalInfo>

              <ModalComments>
                <strong>Comments:</strong> {notice.comments}
              </ModalComments>

              <ModalButtons>
                <ModalPhone href={`tel: ${user.phone}`}>Contact</ModalPhone>

                <ModalButtonAdd onClick={handleAddToFavorite} isSelected={isSelected} isLoggedIn={isLoggedIn}>
                  <span>{isSelected && isLoggedIn ? 'Delete' : 'Add'}</span>{' '}
                  <span>
                    <IconHeart width={24} height={24} isSelected={isSelected} isLoggedIn={isLoggedIn}>
                      <use href={`${sprite}#icon-heart`}></use>
                    </IconHeart>
                  </span>
                </ModalButtonAdd>
              </ModalButtons>
            </ModalContent>
            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}>
              <IconCross width={24} height={24}>
                <use href={`${sprite}#icon-cross`}></use>
              </IconCross>
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
      {isModalOpenAttention ? <ModalAttention onClose={closeModalAttention} /> : null}
    </>
  );
};
