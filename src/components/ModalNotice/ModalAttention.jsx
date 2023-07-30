import React, { useEffect} from 'react';
import { Background, IconCross } from './ModalNotice.styled';
import { ModalWrapper, ModalHeader, ModalText, ModalAuth, CloseModalButton } from './ModalAttention.styled';
import sprite from '../../images/icons.svg';
import  AuthButtonsModal  from './AuthButtonsModal';

const ModalAttention = ({onClose}) => {

  useEffect(() => {
    
    const handleKeyDown = e => {
      if(e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

  }, [onClose])
  
  const handleBackDropClick = e => {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <>
      <Background onClick={handleBackDropClick}>
        <ModalWrapper>
          <ModalHeader>Attention</ModalHeader>
          <ModalText>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</ModalText>
          <ModalAuth>
              <AuthButtonsModal />
          </ModalAuth>
          <CloseModalButton 
            aria-label='Close modal'
            onClick={() => onClose(prev => !prev)}
            >
              <IconCross width={24} height={24}>
                <use href={`${sprite}#icon-cross`}></use>
              </IconCross>
          </CloseModalButton>  
        </ModalWrapper>
      </Background>
    
    </>
  )
}

export default ModalAttention;