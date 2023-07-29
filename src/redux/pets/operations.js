import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPetThunk = createAsyncThunk('pets/addPets', async (formData, thunkAPI) => {
  try {
    const { name, avatar, birthday, type, comments } = formData;

    // Створюємо об'єкт FormData та додаємо у нього файли та решту полів
    const data = new FormData();
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('comments', comments);
    data.append('avatar', avatar);
    data.append('type', type);

    const response = await axios.post('/pets', data);

    console.log('response111:', response.data);
    return response.data;
  } catch (e) {
    console.log('err111:', e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addNoticeThunk = createAsyncThunk('pets/addNotice', async (formData, thunkAPI) => {
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
    console.log('response111:', response);
    // toast.success('New contact successfully added.');
    return response.data;
  } catch (e) {
    console.log('e111:', e.message);
    // toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

//=========================================//

const deletePet = createAsyncThunk('pets/deletePet', async (_id, thunkApi) => {
  try {
    // await axios.delete(`pets/${_id}`);
    const response = await axios.delete(`pets/${_id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const petsOperations = { deletePet };

export default petsOperations;
