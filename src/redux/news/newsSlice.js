import { createSlice } from '@reduxjs/toolkit';
import newsOperations from './operations';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    error: null,
    currentPage: 1,
    pattern: '',
    perPage: 6,
    totalPages: 0,
  },
  extraReducers: {
    [newsOperations.fetchNews.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload.news.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log('act', action.payload);
      state.totalPages = action.payload.totalCount;
    },
    [newsOperations.setPattern.fulfilled](state, action) {
      state.error = null;
      state.pattern = action.payload.pattern;
    },
    [newsOperations.setCurrentPage.fulfilled](state, action) {
      state.error = null;
      state.currentPage = action.payload.currentPage;
    },
    [newsOperations.setTotalPages.fulfilled](state, action) {
      state.error = null;
      state.totalPages = action.payload.totalPages;
    },
  },
});

export default newsSlice.reducer;
