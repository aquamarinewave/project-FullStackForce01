// import axios from 'axios';

const baseURL = `https://fullstackforce.onrender.com/api/news`;

// export const fetchByNews = async () => {
//   const data = await axios.get(baseURL);
//   return data;
// };

export const fetchSearchNews = async (pattern = '', page = 1) => {
  try {
    const response = await fetch(`${baseURL}?title=${pattern}&page=${page}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    new Error(`Oopps...no movies with this name - ${pattern}`);
  }
};
