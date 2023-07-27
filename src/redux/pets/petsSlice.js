import { createSlice } from '@reduxjs/toolkit';

import { addNoticeThunk, addPetThunk } from './operations';

const listPets = {
  pet: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledAddPet = (state, action) => {
  state.pet.push(action.payload);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
      .addCase(addNoticeThunk.rejected, handleRejected);
  },
});

export default petsSlice.reducer;
