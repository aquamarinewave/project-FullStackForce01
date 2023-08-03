import { createSlice } from '@reduxjs/toolkit';
import friendsOperations from './operations';

const friendsList = {
  items: [],
  error: null,
  isLoading: false,
};

const handleFulfilleFriends = (state, action) => {
  state.items = action.payload.friends;
  state.error = null;
  state.isLoading = true;
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsList,

  extraReducers: builder => {
    builder.addCase(friendsOperations.fetchFriends.fulfilled, handleFulfilleFriends);
  },
});

export default friendsSlice.reducer;
