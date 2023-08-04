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
    if (category !== 'my-pet') {
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

const fetchUserPets = createAsyncThunk('pets/fetchUserPets', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/pets`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const deleteUserPet = createAsyncThunk('pets/deleteUserPet', async (_id, thunkApi) => {
  try {
    const response = await axios.delete(`pets/${_id}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const petsOperations = {
  addPetThunk,
  addNoticeThunk,
  deleteUserPet,
  fetchUserPets,
};

export default petsOperations;
