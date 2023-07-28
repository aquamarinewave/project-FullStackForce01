import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';

import sprite from '../../images/icons.svg';

import {
  GoToProfileButton,
  IconPawPrint,
  ModalCongratsBackdrop,
  ModalContent,
  CloseButton,
  IconCrossSmall,
} from './ModalCongrats.styled';

const ModalCongrats = ({ isOpen, onRequestClose, onApprove, btnIconName, btnIconColor, children }) => {
  const modalRef = useRef();
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
        <ModalCongratsBackdrop ref={modalRef} onClick={handleBackdropClick}>
          <ModalContent>
            <CloseButton onClick={() => onRequestClose()}>
              <IconCrossSmall width={24} height={24}>
                <use href={`${sprite}#icon-plus-small`}></use>
              </IconCrossSmall>
            </CloseButton>
            {/* <div>{children}</div> */}

            <h3>Congrats!</h3>
            <p>Youre registration is success</p>
            <GoToProfileButton>
              GIconPawPrinto to profile
              <IconPawPrint width={24} height={24}>
                <use href={`${sprite}#icon-plus-small`}></use>
              </IconPawPrint>
            </GoToProfileButton>
          </ModalContent>
        </ModalCongratsBackdrop>,
        document.getElementById('portal-root')
      )
    : null;
};

export default ModalCongrats;
