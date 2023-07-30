import { createSlice } from '@reduxjs/toolkit';
import userPetsOperations from './operations';

const initialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledPetFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.pets = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledDelete = (state, action) => {
  //   state.pets = state.pets.filter(pet => pet.id !== action.payload.id);

  //   console.log('state:', state);
  //   console.log('action:', action);
  const index = state.pets.findIndex(pet => pet._id !== action.payload._id);
  state.pets.splice(index, 1);
  console.log('index:', index);
};

const userPetsSlice = createSlice({
  name: 'userPets',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(userPetsOperations.addUserPet.pending, handlePending)
      .addCase(userPetsOperations.addUserPet.fulfilled, handleFulfilledPetFetch)
      .addCase(userPetsOperations.addUserPet.rejected, handleRejected)
      .addCase(userPetsOperations.deleteUserPet.pending, handlePending)
      .addCase(userPetsOperations.deleteUserPet.fulfilled, handleFulfilledDelete)
      .addCase(userPetsOperations.deleteUserPet.rejected, handleRejected);
  },
});
export default userPetsSlice.reducer;
