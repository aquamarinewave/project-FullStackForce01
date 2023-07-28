import axios from 'axios';

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices/favorites';

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": `${axios.defaults.headers.common.Authorization}`
  },
};

function fetchGetFavorites() {

  return fetch((`${BASE_URL}`), options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}
export default fetchGetFavorites;
