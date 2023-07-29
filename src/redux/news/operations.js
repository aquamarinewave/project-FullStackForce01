import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';

const fetchNews = createAsyncThunk('news/fetch', async ({ pattern, page }, thunkAPI) => {
  try {
    const response = await axios.get(`/news?title=${pattern}&page=${page}`);
    return response.data.length ? response.data[0] : {};
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const setPattern = createAsyncThunk('news/pattern', async (pattern, thunkAPI) => {
  try {
    return pattern;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const setPage = createAsyncThunk('news/page', async (page, thunkAPI) => {
  try {
    return page;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const newsOperations = {
  fetchNews,
  setPattern,
  setPage,
};

export default newsOperations;
