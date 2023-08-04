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
  state.pets.push({ ...action.payload, _id: 'fake_id' });
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

const handleFulfilledPetFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.pets = action.payload;
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  const idToDelete = action.meta.arg;
  const index = state.pets.findIndex(pet => pet._id === idToDelete);
  state.pets.splice(index, 1);
  state.error = null;
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
      .addCase(authOperations.logoutUser.fulfilled, handleFulfilledLogOut)
      .addCase(petsOperations.fetchUserPets.pending, handlePending)
      .addCase(petsOperations.fetchUserPets.fulfilled, handleFulfilledPetFetch)
      .addCase(petsOperations.fetchUserPets.rejected, handleRejected)
      .addCase(petsOperations.deleteUserPet.pending, handlePending)
      .addCase(petsOperations.deleteUserPet.fulfilled, handleFulfilledDelete)
      .addCase(petsOperations.deleteUserPet.rejected, handleRejected);
  },
});

export default petsSlice.reducer;
