import { createSlice } from '@reduxjs/toolkit';

import petsOperations, { addNoticeThunk, addPetThunk } from './operations';
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

const handleFulfilledDelete = (state, action) => {
  // state.pets = state.pets.filter(pet => pet.id !== action.payload.id);

  const index = state.pets.findIndex(pet => pet.id !== action.payload.id);
  state.pets.splice(index, 1);
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
      .addCase(authOperations.logoutUser.fulfilled, handleFulfilledLogOut)
      .addCase(petsOperations.deletePet.pending, handlePending)
      .addCase(petsOperations.deletePet.fulfilled, handleFulfilledDelete)
      .addCase(petsOperations.deletePet.rejected, handleRejected);
  },
});

export default petsSlice.reducer;
