// Компонент рендерить детальну інформацію про власного
// домашнього улюбленця користувача з можливістю
//  видалення картки.Клік по кнопці видалення картки
//  відкриває модальне вікно  ModalApproveAction

import { PetCard, PetDesc } from './PetsItem.styled';

const PetItem = () =>
  //   {
  //     //   pet: { id, img, name, date, type, comments },
  //     //   onDelete,
  //   }
  {
    return (
      <PetCard>
        {/* <img src={img} alt={name} /> */}
        <PetDesc>Name: </PetDesc>
        <PetDesc>Date of birth: </PetDesc>
        <PetDesc>Type: </PetDesc>
        <PetDesc>Comments: </PetDesc>
        <button>del</button>
      </PetCard>
    );
  };

export default PetItem;
