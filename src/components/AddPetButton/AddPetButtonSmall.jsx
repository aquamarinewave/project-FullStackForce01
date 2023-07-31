import sprite from '../../images/icons.svg';
import { AddPetSmall, IconPlus } from './AddPetButton.styled';

const AddPetButtonSmall = () => {
  return (
    <AddPetSmall to="/add-pet">
      <IconPlus width={24} height={24}>
        <use href={`${sprite}#icon-plus`}></use>
      </IconPlus>
      Add Pet
    </AddPetSmall>
  );
};
export default AddPetButtonSmall;
