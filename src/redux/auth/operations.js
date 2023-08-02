import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registrationUser = createAsyncThunk('auth/register', async (registerData, thunkApi) => {
  try {
    const response = await axios.post('users/register', registerData);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      toast.error(error.response.data.message, {
        position: 'top-center',
      })
    );
  }
});

const loginUser = createAsyncThunk('auth/login', async (loginData, thunkApi) => {
  try {
    const response = await axios.post('users/login', loginData);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      toast.error(error.response.data.message, {
        position: 'top-center',
      })
    );
  }
});

const logoutUser = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    return thunkApi.rejectWithValue(
      toast.error(error.response.data.message, {
        position: 'top-center',
      })
    );
  }
});

const refreshCurrentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const response = await axios.get('users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk('auth/profile', async (userData, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to update user');
  }

  try {
    token.set(persistedToken);
    const res = await axios.patch('/users', userData);
    return res.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = {
  registrationUser,
  loginUser,
  logoutUser,
  refreshCurrentUser,
  updateUser,
};

export default authOperations;
