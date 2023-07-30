import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/ModalApproveAction/ModalApproveAction';
import authOperations from 'redux/auth/operations';
import { LogOutBtn, IconLogOut, LogOutBtnText } from './LogoutBtnStyled';
import sprite from 'images/icons.svg';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logoutUser());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <>
      <LogOutBtn onClick={toggleModal}>
        <IconLogOut width={24} height={24}>
          <use href={`${sprite}#icon-logout`}></use>
        </IconLogOut>
        <LogOutBtnText>Log Out</LogOutBtnText>
      </LogOutBtn>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal} onApprove={onLogout} onRequestClose={toggleModal}>
          Already leaving?
        </Modal>
      )}
    </>
  );
};
