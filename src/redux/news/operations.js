import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';

const fetchNews = createAsyncThunk('news/fetch', async ({ pattern, currentPage, perPage }, thunkAPI) => {
  try {
    const response = await axios.get(`/news?title=${pattern}&page=${currentPage}&limit=${perPage}`);
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

const setCurrentPage = createAsyncThunk('news/currentPage', async (currentPage, thunkAPI) => {
  try {
    return currentPage;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const newsOperations = {
  fetchNews,
  setPattern,
  setCurrentPage,
};

export default newsOperations;
