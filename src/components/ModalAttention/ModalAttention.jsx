import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Background, IconCross } from '../ModalNotice/ModalNotice.styled';
import { ModalWrapper, ModalHeader, ModalText, ModalAuth, CloseModalButton } from './ModalAttention.styled';
import sprite from '../../images/icons.svg';
import AuthButtonsModal from '../ModalNotice/AuthButtonsModal';

const ModalAttention = ({ onClose }) => {
  const portalRoot = document.getElementById('modal-root');
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0';
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Background onClick={handleBackDropClick}>
      <ModalWrapper>
        <ModalHeader>Attention</ModalHeader>
        <ModalText>
          We would like to remind you that certain functionality is available only to authorized users.If you have an
          account, please log in with your credentials. If you do not already have an account, you must register to
          access these features.
        </ModalText>
        <ModalAuth>
          <AuthButtonsModal />
        </ModalAuth>
        <CloseModalButton aria-label="Close modal" onClick={onClose}>
          <IconCross width={24} height={24}>
            <use href={`${sprite}#icon-cross`}></use>
          </IconCross>
        </CloseModalButton>
      </ModalWrapper>
    </Background>,
    portalRoot
  );
};

export default ModalAttention;
