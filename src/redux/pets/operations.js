import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const addPetThunk = createAsyncThunk('pets/addPets', async (formData, thunkAPI) => {
  try {
    const { name, avatar, birthday, type, comments } = formData;

    const data = new FormData();
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('comments', comments);
    data.append('avatar', avatar);
    data.append('type', type);

    const response = await axios.post('/pets', data);

    toast.success('Pet successfully added!');
    return response.data;
  } catch (e) {
    toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const addNoticeThunk = createAsyncThunk('pets/addNotice', async (formData, thunkAPI) => {
  try {
    const { category, name, avatar, birthday, type, price, sex, location, comments, title } = formData;

    const data = new FormData();
    data.append('category', category);
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('comments', comments);
    data.append('avatar', avatar);
    data.append('type', type);
    data.append('sex', sex);
    data.append('location', location);
    if (category === 'sell') {
      data.append('price', price);
    }
    if (category !== 'your pet') {
      data.append('title', title);
    }

    const response = await axios.post('/notices', data);
    toast.success('New ad successfully added!');
    return response.data;
  } catch (e) {
    toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const petsOperations = {
  addPetThunk,
  addNoticeThunk,
};

export default petsOperations;
