import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Background , ModalWrapper, ModalContent, CloseModalButton,  IconHeart, IconCross} from './ModalNotice.styled';
import fetchModalDetail from '../ModalNotice/fetchModalDetail';
import fetchAddToFavorite from '../ModalNotice/fetchAddToFavorite';
import fetchDeleteToFavorite from '../ModalNotice/fetchDeleteToFavorite';
import sprite from '../../images/icons.svg';
import authSelector from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const ModalNotice = ({ showModal, setShowModal, idCard }) => {
  const [valueModalInfo, setValueModalInfo] = useState({});
  const [userModalInfo, setUserModalInfo] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const isLoggedIn = useSelector(authSelector.loggedInSelector);

  // useEffect(() => {
  //   fetchModalDetail(idCard)
  //     .then((data) => {
  //       return [setValueModalInfo({...data.notice}), setUserModalInfo({...data.user})];
  //       ;
  //     })
  //     .catch(error => console.log(error))
  // }, [idCard]);

  useEffect(() => {
    async function fetchModalDetailPet() {
      try {
        const data = await fetchModalDetail(idCard);
        setValueModalInfo({...data.notice});
        setUserModalInfo({...data.user});
      } catch (error) {
        console.log(error)
      }
    }
    fetchModalDetailPet();
    
    const savedSelectedState = localStorage.getItem(`pet_${idCard}`);
    if (savedSelectedState !== null) {
      setIsSelected(JSON.parse(savedSelectedState));
    }

  }, [idCard])

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

  const updateLocalStorage = () => {
    localStorage.setItem(`pet_${idCard}`, JSON.stringify(isSelected));
  };


  const handleAddToFavorite = () => {
    if(isLoggedIn) {

      if(isSelected) {
        fetchDeleteToFavorite(idCard)
        setIsSelected(!isSelected);
      } else {
        fetchAddToFavorite(idCard, valueModalInfo);
        setIsSelected(!isSelected);
      }

    } else {
      console.log('LogOUT');
    }
  };

  const {name, birthday, type, sex, location, comments, avatarURL, category} = valueModalInfo;

  const {email, phone} = userModalInfo;

  useEffect(updateLocalStorage, [isSelected, idCard]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div className='modal-info'>
                  <div className="modal-img">
                    <img className="modal-avatar" src={avatarURL} alt={name} />
                    <p className="modal-category">{category}</p>
                  </div>
                  
                  <div>
                    <h2 className="modal-header">Сute dog looking for a home</h2>
                    <div className="modal-info-list">
                    <ul className="modal-info-item modal-info-item--name">
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

                    <ul className="modal-info-item">
                      <li>{name || " "}</li>
                      <li>{birthday || " "}</li>
                      <li>{type || " "}</li>
                      <li>{location || " "}</li>
                      <li>{sex || " "}</li>
                      <li className="modal-contact" >
                        <a href={`mailto: ${email}`}>{email || " "}</a>
                      </li>
                      <li className="modal-contact">
                        <a href={`tel: ${phone}`}>{phone || "+380 (XXX) (XXXXXXXX)"}</a>
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>

                <p className="modal-comments"><strong>Comments:</strong> {comments}</p>

                <div className="modal-buttons">
                  <a href={`tel: ${phone}`} className="modal-button modal-button--primary" type="button">Contact</a>

                  <button className={`modal-button modal-button--second ${isSelected ? 'selected' : ''}` } type="button" onClick={handleAddToFavorite}><span>Add to</span> <span>  
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
