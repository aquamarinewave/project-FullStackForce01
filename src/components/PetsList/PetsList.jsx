import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PetItem from '../PetsItem/PetsItem';
import { UserPetsList } from './PetsList.styled';
import { fetchUserPet } from 'services/api/petsFetch';

const PetsList = () => {
  const [pets, setPet] = useState([]);
  console.log(pets);
  const { petId } = useParams();

  useEffect(() => {
    if (!petId) return;

    const getUserPet = async () => {
      const result = await fetchUserPet(petId);
      setPet([...result]);
    };
    getUserPet();
  }, [petId]);

  return (
    <>
      <UserPetsList>
        {pets.map(pet => (
          <li key={pet.id}>
            <PetItem pets={pets} />
          </li>
        ))}
      </UserPetsList>
    </>
  );
};
export default PetsList;
