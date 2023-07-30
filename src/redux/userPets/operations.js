import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';

const addUserPet = createAsyncThunk('userPets/addUserPets', async ({ pattern, page }, thunkAPI) => {
  try {
    const response = await axios.get(`/pets`);
    console.log('responsePet:', response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const deleteUserPet = createAsyncThunk('userPets/deleteUserPet', async (_id, thunkApi) => {
  try {
    // await axios.delete(`pets/${_id}`);
    const response = await axios.delete(`pets/${_id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const userPetsOperations = { deleteUserPet, addUserPet };

export default userPetsOperations;
