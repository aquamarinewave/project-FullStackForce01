import PetsList from '../PetsList/PetsList';
import AddPetButton from '../AddPetButton/AddPetButton';
import { PetDataContainer, Title, TitleContainer } from './PetsData.styled';

const PetData = () => {
  return (
    <PetDataContainer>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddPetButton />
      </TitleContainer>
      <PetsList />
    </PetDataContainer>
  );
};
export default PetData;
