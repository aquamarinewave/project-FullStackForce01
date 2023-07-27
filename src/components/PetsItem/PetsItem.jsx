// Компонент рендерить детальну інформацію про власного
// домашнього улюбленця користувача з можливістю
//  видалення картки.Клік по кнопці видалення картки
//  відкриває модальне вікно  ModalApproveAction

import { useState } from 'react';
import Modal from 'components/ModalApproveAction/ModalApproveAction';

import sprite from '../../images/icons.svg';
import { DeleteButton, Description, IconTrash, PetCard, PetDesc, PetFoto, Subtitle } from './PetsItem.styled';
// import defaultImage from '../../images/x1/petphoto/pet-photo-small.jpg';

const PetItem = ({ _id, avatarUR, name, birth, type, comments }) => {
  const [showModal, setShowModal] = useState(false);
  const [idPet, setIdPet] = useState('');

  const openModal = () => {
    setShowModal(showModal => !showModal);
    setIdPet(_id);
  };

  return (
    <PetCard>
      <PetFoto src={avatarUR} alt={type} />
      <PetDesc>
        <Description>
          <Subtitle>Name: {name}</Subtitle>
        </Description>
        <Description>
          <Subtitle>Date of birth: {birth}</Subtitle>
        </Description>
        <Description>
          <Subtitle>Type: {type}</Subtitle>Basenji
        </Description>
        <Description>
          <Subtitle> Comments: {comments}</Subtitle>
        </Description>

        <DeleteButton onClick={openModal}>
          <IconTrash width={24} height={24}>
            <use href={`${sprite}#icon-trash-2`}></use>
          </IconTrash>
        </DeleteButton>
        <Modal showModal={showModal} setShowModal={setShowModal} idCard={idPet}>
          Already leaving?
        </Modal>
      </PetDesc>
    </PetCard>
  );
};

export default PetItem;
