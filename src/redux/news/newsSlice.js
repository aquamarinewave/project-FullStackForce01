import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: {
    [fetchNews.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload;
    },
  },
});

export default newsSlice.reducer;
