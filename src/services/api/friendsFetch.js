import axios from 'axios';

export async function fetchByFriends() {
  const baseURL = `https://fullstackforce.onrender.com/api/friends`;
  const data = await axios.get(baseURL);
  return data;
}
