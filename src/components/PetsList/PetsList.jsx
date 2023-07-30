import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import PetItem from '../PetsItem/PetsItem';
import { Title, Text, UserPetsList, InfoCard } from './PetsList.styled';
import { fetchUserPet } from 'services/api/petsFetch';
// import { useSelector } from 'react-redux';
// import userPetsSelector from 'redux/userPets/userPetsSelector';

const PetsList = () => {
  const [pets, setPet] = useState([]);
  // const pets = useSelector(userPetsSelector.selectUserPets);
  console.log(pets);

  useEffect(() => {
    const getUserPet = async () => {
      const result = await fetchUserPet();
      console.log('result:', result);
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
