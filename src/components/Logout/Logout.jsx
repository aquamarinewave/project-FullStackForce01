
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { Button, ButtonText, IconLogout } from 'components/Logout/Logout.styled';
import sprite from '../../images/icons.svg';
import Modal from 'components/ModalApproveAction/ModalApproveAction';

const Logout = ({ isMobile, isBlue, isGrey }) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logoutUser());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Button onClick={toggleModal} isMobile={isMobile}>
        <ButtonText color="logout" weight="bold" margin="8px" isGrey={isGrey}>
          Logout
        </ButtonText>
        <IconLogout width={24} height={24} isBlue={isBlue}>
          <use href={`${sprite}#icon-logout`}></use>
        </IconLogout>
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal} onApprove={onLogout} onRequestClose={toggleModal}>
          Already leaving?
        </Modal>
      )}
    </>
  );
};

export default Logout;
