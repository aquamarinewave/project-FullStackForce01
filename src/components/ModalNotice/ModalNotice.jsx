import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import noticeSelector from 'redux/notices/noticesSelector';
import authSelector from 'redux/auth/authSelector';

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
import sprite from '../../images/icons.svg';

export const ModalNotice = ({ onRequestClose, handleAddToFavorite, notice }) => {
  const modalRef = useRef();
  const portalRoot = document.getElementById('modal-root');
  const { user } = useSelector(noticeSelector.selectNoticeDetails);
  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  const handleClickOutside = e => {
    if (modalRef.current === e.target) {
      onRequestClose(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    },
    [onRequestClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0';
    };
  }, [keyPress]);

  return (
    <>
      {notice
        ? ReactDOM.createPortal(
            <Background onClick={handleClickOutside} ref={modalRef}>
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
                            <a href={`mailto: ${user?.email}`}>{user?.email || 'email@gamil.com'}</a>
                          </ModalContact>
                          <ModalContact>
                            {user?.phone ? <a href={`tel: ${user?.phone}`}>{user?.phone}</a> : 'no phone'}
                          </ModalContact>
                        </ModalInfoItemValue>
                      </ModalInfoList>
                    </div>
                  </ModalInfo>

                  <ModalComments>
                    <strong>Comments:</strong> {notice.comments ? notice.comments : 'no comments'}
                  </ModalComments>

                  <ModalButtons>
                    {user?.phone && <ModalPhone href={`tel: ${user?.phone}`}>Contact</ModalPhone>}

                    <ModalButtonAdd onClick={handleAddToFavorite} isPrimary={notice.favorite && isLoggedIn}>
                      <span>{notice.favorite && isLoggedIn ? 'Delete' : 'Add'}</span>{' '}
                      <span>
                        <IconHeart width={24} height={24} isPrimary={notice.favorite && isLoggedIn}>
                          <use href={`${sprite}#icon-heart`}></use>
                        </IconHeart>
                      </span>
                    </ModalButtonAdd>
                  </ModalButtons>
                </ModalContent>
                <CloseModalButton aria-label="Close modal" onClick={onRequestClose}>
                  <IconCross width={24} height={24}>
                    <use href={`${sprite}#icon-cross`}></use>
                  </IconCross>
                </CloseModalButton>
              </ModalWrapper>
            </Background>,
            portalRoot
          )
        : null}
    </>
  );
};
