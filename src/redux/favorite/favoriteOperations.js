import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const controller = new AbortController();

const BASE_URL = 'https://fullstackforce.onrender.com/api/notices';

const fetchModalDetails = createAsyncThunk(
  'favorite/fetchModalDetails',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${_id}`, {
        signal: controller.signal,
      });
      
      return response.data  || {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchAddToFavorite = createAsyncThunk(
  'favorite/fetchAddToFavorite',
  async ({_id, favoriteNoticeStore}, thunkAPI) => {
    try {
      const response = await axios.patch(`${BASE_URL}/${_id}/favorites`, {favoriteNoticeStore}, {
        signal: controller.signal,
        headers: {
          "Authorization": `${axios.defaults.headers.common.Authorization}`
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const fetchDeleteToFavorite = createAsyncThunk(
  'favorite/fetchDeleteToFavorite',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${_id}/favorites`, {
        signal: controller.signal,
        headers: {
          "Authorization": `${axios.defaults.headers.common.Authorization}`
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const favoriteOperations = {
  fetchModalDetails,
  fetchAddToFavorite,
  fetchDeleteToFavorite,
};

export default favoriteOperations;