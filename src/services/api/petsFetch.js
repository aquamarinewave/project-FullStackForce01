import axios from 'axios';

export async function fetchUserPet() {
  const baseURL = `https://fullstackforce.onrender.com/api/pets`;
  const data = await axios.get(baseURL);

  return data.data;
}
//  const currentUser = `https://fullstackforce.onrender.com/api/users/current`;
