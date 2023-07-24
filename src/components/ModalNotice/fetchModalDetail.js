const BASE_URL = ' https://fullstackforce.onrender.com/api/notices/';

export function fetchModalDetail(id) {

  return fetch((`${BASE_URL}${id}`)).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}