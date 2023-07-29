// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';

// const getNews = createAsyncThunk('news', async (registerData, thunkApi) => {
//   try {
//     const response = await axios.get('/news', data);
//     console.log('response111:', response.data);
//     return response.data;
//   } catch (e) {
//     console.log('err111:', e.message);
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });

// const newsOperations = {
//   getNews,
// };

// export default newsOperations;
