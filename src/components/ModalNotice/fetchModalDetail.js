import axios from 'axios';

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices/';

// function fetchModalDetail(id) {

//   return fetch((`${BASE_URL}${id}`)).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
// }

async function fetchModalDetail(id) {
    const response = await axios.get(`${BASE_URL}${id}`);
    return response.data;
}

export default fetchModalDetail;

