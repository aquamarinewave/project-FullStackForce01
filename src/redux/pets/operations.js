import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPetThunk = createAsyncThunk('pets/addPets', async (formData, thunkAPI) => {
  console.log('formData:', formData);
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

    // console.log('response:', response.data);
    return response.data;
  } catch (e) {
    console.log('err:', e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addNoticeThunk = createAsyncThunk('pets/addNotice', async (formData, thunkAPI) => {
  console.log('formData2:', formData);
  try {
    const { category, name, avatar, birthday, type, price, sex, location, comments } = formData;

    const data = new FormData();
    data.append('category', category);
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('comments', comments);
    data.append('avatar', avatar);
    data.append('type', type);
    data.append('sex', sex);
    data.append('location', location);
    data.append('price', price);
    // }

    console.log('data:', data);
    const response = await axios.post('/notices', data);
    console.log('response:', response);
    // toast.success('New contact successfully added.');
    return response.data;
  } catch (e) {
    console.log('e:', e.message);
    // toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});
