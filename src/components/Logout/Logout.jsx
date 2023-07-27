import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { Button, ButtonText, IconLogout } from 'components/Logout/Logout.styled';
import sprite from '../../images/icons.svg';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const Logout = ({ isMobile }) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logoutUser());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Button
        onClick={toggleModal}
        //   onClick={onLogout}
        isMobile={isMobile}
      >
        <ButtonText color="logout" weight="bold" margin="8px">
          Logout
        </ButtonText>
        <IconLogout width={24} height={24}>
          <use href={`${sprite}#icon-logout`}></use>
        </IconLogout>
      </Button>
      {isModalOpen && (
        <ModalApproveAction
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          onApprove={onLogout}
          onRequestClose={toggleModal}
          btnIconColor={'#fef9f9'}
          btnIconName={'icon-logout'}
        >
          Already leaving?
        </ModalApproveAction>
      )}
    </>
  );
};

export default Logout;
