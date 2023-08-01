import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Icon from 'utils/Icon/Icon';
import { Backdrop, BtnContainer, CloseIcon, Container, Content } from './ModalUserStyled';

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
      document.body.style.marginRight = '17px';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0px';
    };
  }, [handleKeyDown, isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <Backdrop ref={modalRef} onClick={handleBackdropClick}>
          <Container>
            <CloseIcon onClick={() => onRequestClose()}>
              <Icon name="cross" size="24" color="var(--dark-blue)" />
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
