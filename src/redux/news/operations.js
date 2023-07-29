import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk('news/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/news');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
