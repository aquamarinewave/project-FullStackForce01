// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import PetItem from '../PetsItem/PetsItem';
import { Title, UserPetsList } from './PetsList.styled';

const PetsList = () => {
  //   const [pet, setPet] = useState([]);
  //   const { petId } = useParams();

  //   useEffect(() => {
  //     const getPet = async () => {
  //       const result = await getUserPet(petId);
  //       setPet([...result]);
  //     };
  //     getPet();
  //   }, [petId]);
  return (
    <>
      <Title>My pets:</Title>

      <UserPetsList>
        <li>
          <PetItem />
        </li>
      </UserPetsList>
    </>
  );
};
export default PetsList;
