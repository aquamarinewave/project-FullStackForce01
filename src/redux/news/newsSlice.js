import { createSlice } from '@reduxjs/toolkit';
import newsOperations from './operations';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    error: null,
    page: 1,
    pattern: '',
  },
  extraReducers: {
    [newsOperations.fetchNews.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload.news.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    [newsOperations.setPattern.fulfilled](state, action) {
      state.error = null;
      state.pattern = action.payload.pattern;
    },
    [newsOperations.setPage.fulfilled](state, action) {
      state.error = null;
      state.page = action.payload.page;
    },
  },
});

export default newsSlice.reducer;
