import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const controller = new AbortController();

const baseURLForAll = 'https://fullstackforce.onrender.com/api/notices';

const fetchNoticesForAll = createAsyncThunk(
  'notices/fetchNoticesForAll',
  async ({ pattern, currentPage, controller, categoryId, perPage }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseURLForAll}?title=${pattern}&page=${currentPage}&limit=${perPage}&category=${categoryId}`,
        {
          signal: controller.signal,
        }
      );

      return response.data.length ? response.data[0] : {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchNoticesOwn = createAsyncThunk(
  'notices/fetchNoticesOwn',
  async ({ controller, currentPage, perPage, pattern }, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURLForAll}/users?page=${currentPage}&limit=${perPage}&title=${pattern}`, {
        signal: controller.signal,
      });

      return response.data.length ? response.data[0] : {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchNoticesFavorites = createAsyncThunk(
  'notices/fetchNoticesFavorites',
  async ({ controller, currentPage, perPage, pattern }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseURLForAll}/favorites?page=${currentPage}&limit=${perPage}&title=${pattern}`,
        {
          signal: controller.signal,
        }
      );

      return response.data.length ? response.data[0] : {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteUserNotice = createAsyncThunk('notices/deleteUserNotice', async (_id, thunkApi) => {
  try {
    const response = await axios.delete(`${baseURLForAll}/${_id}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
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

const setCurrentPage = createAsyncThunk('notices/currentPage', async (page, thunkAPI) => {
  try {
    return page;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchModalDetails = createAsyncThunk('notices/fetchModalDetails', async (_id, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURLForAll}/${_id}`, {
      signal: controller.signal,
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchAddToFavorite = createAsyncThunk('notices/fetchAddToFavorite', async (_id, thunkAPI) => {
  try {
    await axios.patch(`${baseURLForAll}/${_id}/favorites`, {
      signal: controller.signal,
      headers: {
        'Authorization': `${axios.defaults.headers.common.Authorization}`,
      },
    });

    return _id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchDeleteToFavorite = createAsyncThunk('notices/fetchDeleteToFavorite', async (_id, thunkAPI) => {
  try {
    await axios.delete(`${baseURLForAll}/${_id}/favorites`, {
      signal: controller.signal,
      headers: {
        'Authorization': `${axios.defaults.headers.common.Authorization}`,
      },
    });
    return _id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const removeNotice = createAsyncThunk('notices/removeItem', async (_id, thunkAPI) => {
  try {
    return _id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const noticesOperations = {
  fetchNoticesForAll,
  fetchNoticesOwn,
  fetchNoticesFavorites,
  deleteUserNotice,
  setPattern,
  setCurrentPage,
  setCategoryId,
  fetchModalDetails,
  fetchAddToFavorite,
  fetchDeleteToFavorite,
  removeNotice,
};

export default noticesOperations;
