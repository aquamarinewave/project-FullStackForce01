import { createSlice } from '@reduxjs/toolkit';
import newsOperations from './operations';

const newsList = {
  items: [],
  error: null,
  currentPage: 1,
  pattern: '',
  perPage: 6,
  totalPages: 0,
};

const handleFulfilledNews = (state, action) => {
  state.error = null;
  const { news, totalCount } = action.payload;
  state.items = news.sort((a, b) => new Date(b.date) - new Date(a.date));
  state.totalPages = Math.ceil(totalCount / state.perPage);
};

const handleFulfilledPattern = (state, action) => {
  state.error = null;
  state.pattern = action.payload;
};

const handleFulfille = (state, action) => {
  state.error = null;
  state.currentPage = action.payload;
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: newsList,

  extraReducers: builder => {
    builder
      .addCase(newsOperations.fetchNews.fulfilled, handleFulfilledNews)
      .addCase(newsOperations.setPattern.fulfilled, handleFulfilledPattern)
      .addCase(newsOperations.setCurrentPage.fulfilled, handleFulfille);
  },
});

export default newsSlice.reducer;
