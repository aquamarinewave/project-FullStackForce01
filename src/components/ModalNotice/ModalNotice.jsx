import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Background , ModalWrapper, ModalContent, CloseModalButton,  IconHeart, IconCross} from './ModalNotice.styled';
import {fetchModalDetail} from '../ModalNotice/fetchModalDetail';
import sprite from '../../images/icons.svg';

export const ModalNotice = ({ showModal, setShowModal }) => {
  const [valueModalInfo, setValueModalInfo] = useState([]);

  useEffect(() => {
    fetchModalDetail("64bbeec61951acbea6bb75c2")
      .then(data => {
        console.log(data);
      return setValueModalInfo(data);
      })
      .catch(error => console.log(error))
      .finally(() => {
        console.log("finally");
      });
  }, []);

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

  const {name, birthday, type, sex, avatarURL} = valueModalInfo;

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div class='modal-info'>
                  <div class="modal-img"><img width = "262" height = "298" src={avatarURL} alt={name} />
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
                      <li>{name}</li>
                      <li>{birthday}</li>
                      <li>{type}</li>
                      <li>Kyiv</li>
                      <li>{sex}</li>
                      <li class="modal-contact" >
                        user@mail.com
                      </li>
                      <li class="modal-contact">
                        +380971234567
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>

                <p class="modal-comments"><strong>Comments:</strong> Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! </p>

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
