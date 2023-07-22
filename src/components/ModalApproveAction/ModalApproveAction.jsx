import React, { useEffect, useRef } from 'react';
import Icon from 'utils/Icon/Icon';
import {
  ApproveBtn,
  Backdrop,
  BtnContainer,
  BtnText,
  CancelBtn,
  CloseIcon,
  Container,
  Content,
} from './ModalApproveAction.styled';

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
        <CloseIcon name="cross" size="24" />
        <Content>{children}</Content>
        <BtnContainer>
          <CancelBtn onClick={onRequestClose}>Cancel</CancelBtn>
          <ApproveBtn onClick={onApprove}>
            <BtnText>Yes</BtnText> {<Icon name="trash-2" color="#fef9f9" size="24" />}
          </ApproveBtn>
        </BtnContainer>
      </Container>
    </Backdrop>
  ) : null;
};

export default Modal;
