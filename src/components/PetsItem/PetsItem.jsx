// Компонент рендерить детальну інформацію про власного
// домашнього улюбленця користувача з можливістю
//  видалення картки.Клік по кнопці видалення картки
//  відкриває модальне вікно  ModalApproveAction

import sprite from '../../images/icons.svg';
import { DeleteButton, Description, IconTrash, PetCard, PetDesc, PetFoto, Subtitle } from './PetsItem.styled';
import defaultImage from '../../images/x1/petphoto/pet-photo-small.jpg';

const PetItem = () =>
  //   {
  //     //   pet: { id, img, name, date, type, comments },
  //     //   onDelete,
  //   }
  {
    return (
      <PetCard>
        <PetFoto src={defaultImage} />
        <PetDesc>
          <Description>
            <Subtitle>Name: </Subtitle>
          </Description>
          <Description>
            <Subtitle>Date of birth: </Subtitle>
          </Description>
          <Description>
            <Subtitle>Type: </Subtitle>Basenji
          </Description>
          <Description>
            <Subtitle> Comments: </Subtitle>
            Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with
            toys. Although a bit shy, he's a loyal and affectionate lap cat.
          </Description>

          <DeleteButton>
            <IconTrash width={24} height={24}>
              <use href={`${sprite}#icon-trash-2`}></use>
            </IconTrash>
          </DeleteButton>
        </PetDesc>
      </PetCard>
    );
  };

export default PetItem;
