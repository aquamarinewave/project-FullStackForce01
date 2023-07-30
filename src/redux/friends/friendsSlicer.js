import { createSlice } from '@reduxjs/toolkit';
import friendsOperations from './operations';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: {
    [friendsOperations.fetchFriends.fulfilled](state, action) {
      state.items = action.payload.friends;
      state.error = null;
    },
  },
});

export default friendsSlice.reducer;
