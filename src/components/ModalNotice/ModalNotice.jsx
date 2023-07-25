import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Background , ModalWrapper, ModalContent, CloseModalButton,  IconHeart, IconCross} from './ModalNotice.styled';
import {fetchModalDetail} from '../ModalNotice/fetchModalDetail';
import sprite from '../../images/icons.svg';

export const ModalNotice = ({ showModal, setShowModal, idCard }) => {
  const [valueModalInfo, setValueModalInfo] = useState({});
  const [userModalInfo, setUserModalInfo] = useState({});

  useEffect(() => {
    fetchModalDetail(idCard)
      .then((data) => {
        return [setValueModalInfo({...data.notice}), setUserModalInfo({...data.user})];
        ;
      })
      .catch(error => console.log(error))
  }, [idCard]);

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

  const {name, birthday, type, sex, location, comments, avatarURL, category} = valueModalInfo;

  const {email, phone} = userModalInfo;

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div class='modal-info'>
                  <div class="modal-img">
                    <img class="modal-avatar" src={avatarURL} alt={name} />
                    <p class="modal-category">{category}</p>
                  </div>
                  
                  <div>
                    <h2 class="modal-header">Сute dog looking for a home</h2>
                    <div class="modal-info-list">
                    <ul class="modal-info-item modal-info-item--name">
                      <li>
                        Name:
                      </li>
                      <li>
                        Birthday:
                      </li>
                      <li>
                        Type:
                      </li>
                      <li>
                        Place:
                      </li>
                      <li>
                        The sex:
                      </li>
                      <li>
                        Email:
                      </li>
                      <li>
                        Phone:
                      </li>
                    </ul>

                    <ul class="modal-info-item">
                      <li>{name || ""}</li>
                      <li>{birthday || ""}</li>
                      <li>{type || ""}</li>
                      <li>{location || ""}</li>
                      <li>{sex || ""}</li>
                      <li class="modal-contact" >
                        {email}
                      </li>
                      <li class="modal-contact">
                        {phone}
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>

                <p class="modal-comments"><strong>Comments:</strong> {comments}</p>

                <div class="modal-buttons">
                  <a href="tel:+380971234567" class="modal-button modal-button--primary" type="button">Contact</a>

                  <button class="modal-button modal-button--second" type="button"><span>Add to</span> <span>  
                  <IconHeart width={24} height={24}>
                    <use href={`${sprite}#icon-heart`}></use>
                  </IconHeart>
                  </span></button>
                </div>
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
    </>
  );
};
