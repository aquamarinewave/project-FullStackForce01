import { createSlice } from '@reduxjs/toolkit';

import { addNoticeThunk, addPetThunk } from './operations';
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
      .addCase(addPetThunk.pending, handlePending)
      .addCase(addPetThunk.fulfilled, handleFulfilledAddPet)
      .addCase(addPetThunk.rejected, handleRejected)
      .addCase(addNoticeThunk.pending, handlePending)
      .addCase(addNoticeThunk.fulfilled, handleFulfilledAddPet)
      .addCase(addNoticeThunk.rejected, handleRejected)
      .addCase(authOperations.logoutUser.fulfilled, handleFulfilledLogOut);
  },
});

export default petsSlice.reducer;
