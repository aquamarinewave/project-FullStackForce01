import axios from 'axios';

let controller = new AbortController();

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices/favorites';

const options = {
  method: "GET",
  signal: controller.signal,
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

