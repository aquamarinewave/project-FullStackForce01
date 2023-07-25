import { createSlice } from '@reduxjs/toolkit';

import { addNoticeThunk, addPetThunk } from './operations';

const listPets = {
  pet: [],
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledAddContacts = (state, action) => {
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
      .addCase(addPetThunk.fulfilled, handleFulfilledAddContacts)
      .addCase(addPetThunk.rejected, handleRejected)
      .addCase(addNoticeThunk.pending, handlePending)
      .addCase(addNoticeThunk.fulfilled, handleFulfilledAddContacts)
      .addCase(addNoticeThunk.rejected, handleRejected);
  },
});

export default petsSlice.reducer;
