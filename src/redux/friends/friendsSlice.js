import { createSlice } from '@reduxjs/toolkit';
import friendsOperations from './operations';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [friendsOperations.fetchFriends.fulfilled](state, action) {
      state.items = action.payload.friends;
      state.error = null;
      state.isLoading = true;
    },
  },
});

export default friendsSlice.reducer;
