import sprite from '../../images/icons.svg';
import { AddPet, IconPlusSmall } from './AddPetButton.styled';

const AddPetButton = () => {
  return (
    <AddPet to="/add-pet">
      Add Pet
      <IconPlusSmall width={24} height={24}>
        <use href={`${sprite}#icon-plus-small`}></use>
      </IconPlusSmall>
    </AddPet>
  );
};

export default AddPetButton;
