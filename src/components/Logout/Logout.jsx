import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { Button, ButtonText, IconLogout } from 'components/Logout/Logout.styled';
import sprite from '../../images/icons.svg';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const Logout = ({ isMobile, isBlue, isRequest, spacing}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onLogout = () => dispatch(authOperations.logoutUser());
  
  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Button onClick={toggleModal} isMobile={isMobile}>
        <ButtonText color="logout-white" weight="bold" margin="8px">
          Logout
        </ButtonText>
        <IconLogout width={24} height={24} isBlue={isBlue}>
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
        >
          <ButtonText isRequest={isRequest} spacing={spacing}>Already leaving?</ButtonText>
        </ModalApproveAction>
      ) : null}
    </>
  );
};

export default Logout;
