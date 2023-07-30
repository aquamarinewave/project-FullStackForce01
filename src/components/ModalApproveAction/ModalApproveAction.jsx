import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import sprite from '../../images/icons.svg';
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
  BtnIcon,
} from './ModalApproveAction.styled';

const ModalApproveAction = ({ isOpen, onRequestClose, onApprove, btnIconName, btnIconColor, children, isLogout }) => {
  const modalRef = useRef();
  const iconPath = sprite + '#' + btnIconName;
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
        <Backdrop ref={modalRef} onClick={handleBackdropClick}>
          <Container isLogout={isLogout}>
            <CloseIcon onClick={() => onRequestClose()}>
              <Icon name="cross" size="24" color="var(--dark-blue)" />
            </CloseIcon>

            <Content>{children}</Content>
            <BtnContainer>
              <CancelBtn onClick={() => onRequestClose()}>Cancel</CancelBtn>
              <ApproveBtn onClick={onApprove}>
                <BtnText>Yes</BtnText>
                <BtnIcon width={24} height={24} color={btnIconColor}>
                  <use href={iconPath}></use>
                </BtnIcon>
              </ApproveBtn>
            </BtnContainer>
          </Container>
        </Backdrop>,
        portalRoot
      )
    : null;
};

export default ModalApproveAction;
