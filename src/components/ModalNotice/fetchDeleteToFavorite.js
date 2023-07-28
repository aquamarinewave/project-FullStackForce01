import axios from 'axios';

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices/';

const options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${axios.defaults.headers.common.Authorization}`
  },
};

function fetchDeleteToFavorite(id) {

  fetch((`${BASE_URL}${id}/favorites`), options)
  .then(response => response.json())
  .then(patch => console.log(patch))
  .catch(error => console.log(error));

}


export default fetchDeleteToFavorite;