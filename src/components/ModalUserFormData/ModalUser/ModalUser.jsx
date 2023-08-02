import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import sprite from '../../../images/icons.svg';
import { Backdrop, BtnContainer, CloseIcon, Container, Content, CrossIcon } from './ModalUserStyled';

const Modal = ({ isOpen, onRequestClose, onApprove, children }) => {
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
      document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0';
    };
  }, [handleKeyDown, isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <Backdrop ref={modalRef} onClick={handleBackdropClick}>
          <Container>
            <CloseIcon onClick={() => onRequestClose()}>
              <CrossIcon width={24} height={24}>
                <use href={`${sprite}#icon-cross`}></use>
              </CrossIcon>
            </CloseIcon>

            <Content>{children}</Content>
            <BtnContainer></BtnContainer>
          </Container>
        </Backdrop>,
        portalRoot
      )
    : null;
};

export default Modal;
