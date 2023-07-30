import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import sprite from '../../images/icons.svg';
import Icon from 'utils/Icon/Icon';
import {
  ApproveBtnModalCongrats,
  BackdropModalCongrats,
  BtnContainerModalCongrats,
  BtnTextModalCongrats,
  CloseIconModalCongrats,
  ContainerModalCongrats,
  ContentModalCongrats,
  BtnIcon,
} from './ModalCongrats.styled';

const ModalCongrats = ({ isOpen, onRequestClose, onApprove,children }) => {
  const modalRef = useRef();
  const portalRoot = document.getElementById('modal-root');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onRequestClose();
    }
  };

  const handleBackdropClick = event => {
    if (modalRef.current === event.target) {
      onRequestClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <BackdropModalCongrats ref={modalRef} onClick={handleBackdropClick}>
          <ContainerModalCongrats>
            <CloseIconModalCongrats onClick={() => onRequestClose()}>
              <Icon name="cross" size="24" color="var(--dark-blue)" />
            </CloseIconModalCongrats>

            <ContentModalCongrats>{children}</ContentModalCongrats>
            <BtnContainerModalCongrats>
              <ApproveBtnModalCongrats onClick={onApprove}>
                <BtnTextModalCongrats>Go to profile</BtnTextModalCongrats>
                <BtnIcon width={24} height={24} fill="white">
                  <use href={`${sprite}#icon-pawprint-1`}></use>
                </BtnIcon>
              </ApproveBtnModalCongrats>
            </BtnContainerModalCongrats>
          </ContainerModalCongrats>
        </BackdropModalCongrats>,
        portalRoot
      )
    : null;
};

export default ModalCongrats;
