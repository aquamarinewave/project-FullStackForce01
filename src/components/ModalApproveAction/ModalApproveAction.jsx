import React, { useEffect, useRef } from 'react';
import { ApproveBtn, Backdrop, BtnContainer, CancelBtn, Container, Content } from './ModalApproveAction.styled';

const Modal = ({ isOpen, onRequestClose, onApprove, children }) => {
  const modalRef = useRef();

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
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  return isOpen ? (
    <Backdrop ref={modalRef} onClick={handleBackdropClick}>
      <Container>
        <Content>{children}</Content>
        <BtnContainer>
          <CancelBtn onClick={onRequestClose}>Cancel</CancelBtn>
          <ApproveBtn onClick={onApprove}>Yes</ApproveBtn>
        </BtnContainer>
      </Container>
    </Backdrop>
  ) : null;
};

export default Modal;
