import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURLForNotAuth = 'https://fullstackforce.onrender.com/api/notices';

const fetchNoticesForAll = createAsyncThunk(
  'notices/fetchNoticesForAll',
  async ({ pattern, page, controller, categoryId }, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURLForNotAuth}?title=${pattern}&page=${page}&category=${categoryId}`, {
        signal: controller.signal,
      });

      return response.data.length ? response.data[0] : {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchNoticesOwn = createAsyncThunk('notices/fetchNoticesOwn', async ({ controller }, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURLForNotAuth}/users`, {
      signal: controller.signal,
    });

    return response.data.length ? response.data[0] : {};
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchNoticesFavorites = createAsyncThunk('notices/fetchNoticesFavorites', async ({ controller }, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURLForNotAuth}/favorites`, {
      signal: controller.signal,
    });

    return response.data.length ? response.data[0] : {};
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const setCategoryId = createAsyncThunk('notices/categoryId', async (categoryId, thunkAPI) => {
  try {
    return categoryId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const setPattern = createAsyncThunk('notices/pattern', async (pattern, thunkAPI) => {
  try {
    return pattern;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const setPage = createAsyncThunk('notices/page', async (page, thunkAPI) => {
  try {
    return page;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const noticesOperations = {
  fetchNoticesForAll,
  fetchNoticesOwn,
  fetchNoticesFavorites,
  setPattern,
  setPage,
  setCategoryId,
};

export default noticesOperations;
