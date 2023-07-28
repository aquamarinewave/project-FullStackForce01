import axios from 'axios';

export async function fetchByNews() {
  const baseURL = `https://fullstackforce.onrender.com/api/news`;
  const data = await axios.get(baseURL);
  return data;
}
