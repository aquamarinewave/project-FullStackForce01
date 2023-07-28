import axios from 'axios';

export async function fetchByNews() {
  const baseURL = `https://fullstackforce.onrender.com/api/news`;
  const data = await axios.get(baseURL);
  return data;
}

export const fetchSearchNews = (inputName, page = 1) => {
  const baseURL = `https://fullstackforce.onrender.com/api/`;

  return fetch(`${baseURL}news=${inputName}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Oopps...no movies with this name - ${this.props.inputName}`));
  });
};
