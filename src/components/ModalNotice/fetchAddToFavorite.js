import axios from 'axios';

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices/';

function fetchAddToFavorite(id, data) {
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": `${axios.defaults.headers.common.Authorization}`
    },
  };

  fetch((`${BASE_URL}${id}/favorites`), options)
  .then(response => response.json())
  .then(patch => console.log(patch))
  .catch(error => console.log(error));

}
export default fetchAddToFavorite;




