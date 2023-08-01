import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { Button, ButtonText, IconLogout, ModalText } from 'components/Logout/Logout.styled';
import sprite from '../../images/icons.svg';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const Logout = ({
  isMobile,
  isBlue,
  isRequest,
  spacing,
  isReversed,
  isWhite,
  isBorder,
  isGrey,
  isBold,
  margin,
  marginL,
  isDisplay,
  isMarginT,
  isLogout,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onLogout = () => dispatch(authOperations.logoutUser());

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Button
        onClick={toggleModal}
        isMobile={isMobile}
        isReversed={isReversed}
        isBlue={isBlue}
        isBorder={isBorder}
        isDisplay={isDisplay}
        isMarginT={isMarginT}
      >
        <ButtonText isBold={isBold} isGrey={isGrey} margin={margin} marginL={marginL}>
          Logout
        </ButtonText>
        <IconLogout width={24} height={24} isWhite={isWhite}>
          <use href={`${sprite}#icon-logout`}></use>
        </IconLogout>
      </Button>
      {isModalOpen ? (
        <ModalApproveAction
          isOpen={isModalOpen}
          onApprove={onLogout}
          onRequestClose={toggleModal}
          btnIconColor={'var(--bg-color)'}
          btnIconName={'icon-logout'}
          isLogout
          btnIconStroke={'var(--bg-color)'}
        >
          <ModalText weight="500" isRequest={isRequest} spacing={spacing} isLogout={isLogout}>
            Already leaving?
          </ModalText>
        </ModalApproveAction>
      ) : null}
    </>
  );
};

export default Logout;
