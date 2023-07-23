// Компонент рендерить кнопку - посилання Add pet,
//     що переадресовує авторизованого користувача
//      на сторінку AddPetPage для додавання карточки з улюбленцем,
//     та список відповідних карточок - PetsList

import { Link } from 'react-router-dom';
import PetsList from '../PetsList/PetsList';
import Icon from 'utils/Icon/Icon';
import { AddPetButton, PetDataContainer } from './PetsData.styled';

const PetData = () => {
  return (
    <PetDataContainer>
      <Link to="AddPetPage">
        <AddPetButton>
          Add Pet
          <Icon name="plus-small" color="white" size={24} />
        </AddPetButton>
      </Link>

      <PetsList />
    </PetDataContainer>
  );
};
export default PetData;
