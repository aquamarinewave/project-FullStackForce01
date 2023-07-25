import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPetThunk = createAsyncThunk('pets/addPets', async (formData, thunkAPI) => {
  try {
    const { name, avatar, birthday, comments } = formData;

    // Створюємо об'єкт FormData та додаємо у нього файли та решту полів
    const data = new FormData();
    data.append('name', name);
    data.append('birthday', birthday);
    data.append('comments', comments);
    data.append('avatar', avatar);

    console.log('data:', data);
    const response = await axios.post('/pets', { name, birthday, comments });

    console.log('response:', response.data);
    return response.data;
  } catch (e) {
    console.log('err:', e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addNoticeThunk = createAsyncThunk('pets/addNotice', async (formData, thunkAPI) => {
  console.log('formData:', formData);
  try {
    const response = await axios.post('/notice', { formData });
    console.log('response:', response);
    // toast.success('New contact successfully added.');
    return response.data;
  } catch (e) {
    console.log('e:', e.message);
    // toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});
