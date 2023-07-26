// Компонент рендерить кнопку - посилання Add pet,
//     що переадресовує авторизованого користувача
//      на сторінку AddPetPage для додавання карточки з улюбленцем,
//     та список відповідних карточок - PetsList

import { Link } from 'react-router-dom';
import PetsList from '../PetsList/PetsList';
import sprite from '../../images/icons.svg';
import AddPetButton from '../AddPetButton/AddPetButton';
import { PetDataContainer, Title, TitleContainer, IconPlusSmall } from './PetsData.styled';

const PetData = () => {
  return (
    <PetDataContainer>
      <TitleContainer>
        <Title>My pets:</Title>
        <Link to="AddPetPage">
          <AddPetButton>
            Add Pet
            <IconPlusSmall width={24} height={24}>
              <use href={`${sprite}#icon-plus-small`}></use>
            </IconPlusSmall>
          </AddPetButton>
        </Link>
      </TitleContainer>

      <PetsList />
    </PetDataContainer>
  );
};
export default PetData;
