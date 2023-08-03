import { useDispatch } from 'react-redux';
import { useState } from 'react';
import petsOperations from 'redux/pets/operations';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import sprite from '../../images/icons.svg';
import {
  DeleteButton,
  Description,
  IconTrash,
  PetCard,
  PetDesc,
  PetFoto,
  Subtitle,
  InfoTitle,
  InfoDesc,
} from './PetsItem.styled';
import defaultImage from '../../images/x1/petphoto/pet-photo-small.jpg';

const PetItem = ({ pet }) => {
  const { _id, avatarURL, name, birthday, type, comments } = pet;

  const [showModal, setShowModal] = useState(false);
  const [idPet, setIdPet] = useState('');

  const dispatch = useDispatch(_id);

  const onDelete = () => {
    dispatch(petsOperations.deleteUserPet(_id));
    setShowModal(showModal => !showModal);
    setIdPet(_id);
  };

  const openModal = () => {
    setShowModal(showModal => !showModal);
    setIdPet(_id);
  };

  return (
    <PetCard>
      <PetFoto src={avatarURL ?? defaultImage} alt={type} />
      <PetDesc>
        <Description>
          <Subtitle>Name: </Subtitle>
          {name}
        </Description>
        <Description>
          <Subtitle>Date of birth: </Subtitle>
          {birthday}
        </Description>
        <Description>
          <Subtitle>Type: </Subtitle>
          {type}
        </Description>
        <Description>
          <Subtitle> Comments: </Subtitle>
          {comments}
        </Description>
        <DeleteButton onClick={openModal}>
          <IconTrash width={24} height={24}>
            <use href={`${sprite}#icon-trash-2`}></use>
          </IconTrash>
        </DeleteButton>

        {showModal && (
          <ModalApproveAction
            isOpen={showModal}
            onRequestClose={openModal}
            onApprove={onDelete}
            idCard={idPet}
            btnIconStroke={'var(--bg-color)'}
            btnIconColor={'var(--dark-blue)'}
            btnIconName={'icon-trash-2'}
          >
            <InfoTitle> Delete your pet?</InfoTitle>
            <InfoDesc>
              Are you sure you want to delete pet <Subtitle>{name}</Subtitle>?
            </InfoDesc>
            <InfoDesc>You can`t undo this action.</InfoDesc>
          </ModalApproveAction>
        )}
      </PetDesc>
    </PetCard>
  );
};

export default PetItem;
