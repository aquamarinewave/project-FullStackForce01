import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';

const fetchFriends = createAsyncThunk('friends/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/friends`);
    return response.data.length ? response.data[0] : {};
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const friendsOperations = {
  fetchFriends,
};

export default friendsOperations;
