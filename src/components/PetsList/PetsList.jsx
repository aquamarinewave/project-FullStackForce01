import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import PetItem from '../PetsItem/PetsItem';
import { UserPetsList } from './PetsList.styled';
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
      {pets && (
        <UserPetsList>
          {pets.map(pet => (
            <li key={pet._id}>
              <PetItem pet={pet} />
            </li>
          ))}
        </UserPetsList>
      )}
    </>
  );
};
export default PetsList;
