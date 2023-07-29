import { createSlice } from '@reduxjs/toolkit';

import petsOperations from './operations';
import authOperations from '../auth/operations';

const listPets = {
  pets: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledAddPet = (state, action) => {
  state.pets.push(action.payload);
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledLogOut = state => {
  state.pets = [];
  state.error = null;
  state.isLoading = false;
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState: listPets,
  extraReducers: builder => {
    builder
      .addCase(petsOperations.addPetThunk.pending, handlePending)
      .addCase(petsOperations.addPetThunk.fulfilled, handleFulfilledAddPet)
      .addCase(petsOperations.addPetThunk.rejected, handleRejected)
      .addCase(petsOperations.addNoticeThunk.pending, handlePending)
      .addCase(petsOperations.addNoticeThunk.fulfilled, handleFulfilledAddPet)
      .addCase(petsOperations.addNoticeThunk.rejected, handleRejected)
      .addCase(authOperations.logoutUser.fulfilled, handleFulfilledLogOut);
  },
});

export default petsSlice.reducer;
