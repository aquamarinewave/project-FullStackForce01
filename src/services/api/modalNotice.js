import axios from 'axios';

let controller = new AbortController();

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices/';

export async function fetchModalDetail(id) {
    const response = await axios.get((`${BASE_URL}${id}`), {
        signal: controller.signal
    });
    return response.data;
}

export function fetchAddToFavorite(id, data) {
  const options = {
    method: "PATCH",
    signal: controller.signal,
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

export function fetchDeleteToFavorite(id) {

  const options = {
    method: "DELETE",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${axios.defaults.headers.common.Authorization}`
    },
  };

  fetch((`${BASE_URL}${id}/favorites`), options)
  .then(response => response.json())
  .then(patch => console.log(patch))
  .catch(error => console.log(error));
}