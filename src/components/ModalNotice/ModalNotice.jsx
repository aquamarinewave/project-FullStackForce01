import React, { useRef, useEffect, useCallback } from 'react';
import {Background , ModalWrapper, ModalContent, ModalInfo, ModalImg, ModalAvatar, ModalCategory, ModalHeader, ModalInfoList, ModalInfoItemName, ModalInfoItemValue, ModalContact, ModalComments, ModalButtons, ModalPhone, ModalButtonAdd, CloseModalButton,  IconHeart, IconCross} from './ModalNotice.styled';
import ModalAttention from './ModalAttention';
// import fetchModalDetail from '../ModalNotice/fetchModalDetail';
// import fetchAddToFavorite from '../ModalNotice/fetchAddToFavorite';
// import fetchDeleteToFavorite from '../ModalNotice/fetchDeleteToFavorite';
import sprite from '../../images/icons.svg';
// import authSelector from '../../redux/auth/authSelector';
// import { useSelector } from 'react-redux';


export const ModalNotice = ({ 
  showModal, 
  setShowModal,
  isModalOpenAttention,
  setIsModalOpenAttention,
  valueModalInfo,
  userModalInfo,
  handleAddToFavorite,
  isSelected,
  isLoggedIn
}) => {
  // const [valueModalInfo, setValueModalInfo] = useState({});
  // const [userModalInfo, setUserModalInfo] = useState({});
  // const [isSelected, setIsSelected] = useState(false);
  // const [isModalOpenAttention, setIsModalOpenAttention] = useState(false);

  // const isLoggedIn = useSelector(authSelector.loggedInSelector);

  // useEffect(() => {
  //   async function fetchModalDetailPet() {
  //     try {
  //       const data = await fetchModalDetail(idCard);
  //       console.log({...data.notice})
  //       setValueModalInfo({...data.notice});
  //       setUserModalInfo({...data.user});
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchModalDetailPet();

  //   const savedSelectedState = localStorage.getItem(`pet_${idCard}`);

  //   if (savedSelectedState !== null) {
  //     setIsSelected(JSON.parse(savedSelectedState));
  //   } else {
  //     setIsSelected(false);
  //   }

  // }, [idCard, isLoggedIn]);

  const modalRef = useRef();

  const closeModalAttention = () => {
    setIsModalOpenAttention(!isModalOpenAttention)
  }

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

  // const updateLocalStorage = () => {
  //   localStorage.setItem(`pet_${idCard}`, JSON.stringify(isSelected));
  // };

  // const handleAddToFavorite = () => {
  //   if(isLoggedIn) {

  //     if(isSelected) {
  //       fetchDeleteToFavorite(idCard)
  //       setIsSelected(!isSelected);
  //     } else {
  //       fetchAddToFavorite(idCard, valueModalInfo);
  //       setIsSelected(!isSelected);
  //     }

  //   } else {
  //     setShowModal(false);
  //     setIsModalOpenAttention(true);
  //   }
  // };

  const {title, name, birthday, type, sex, location, comments, avatarURL, category} = valueModalInfo;

  const {email, phone} = userModalInfo;

  // useEffect(updateLocalStorage, [isSelected, idCard]);

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
