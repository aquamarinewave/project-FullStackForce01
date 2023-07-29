import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import PetItem from '../PetsItem/PetsItem';
import { InfoCard, Title, Text, UserPetsList } from './PetsList.styled';
import { fetchUserPet } from 'services/api/petsFetch';

const PetsList = () => {
  const [pets, setPet] = useState([]);

  useEffect(() => {
    const getUserPet = async () => {
      const result = await fetchUserPet();
      setPet([...result]);
    };
    getUserPet();
  }, []);

  return (
    <>
      {pets.length !== 0 ? (
        <UserPetsList>
          {pets.map(pet => (
            <li key={pet._id}>
              <PetItem pet={pet} />
            </li>
          ))}
        </UserPetsList>
      ) : (
        <InfoCard>
          <Title>Here will be your pets</Title>
          <Text>To add, press the button AddPet</Text>
        </InfoCard>
      )}
    </>
  );
};
export default PetsList;
