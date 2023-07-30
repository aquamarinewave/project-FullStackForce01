import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './operation';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    error: null,
    page: 1,
    pattern: '',
    categoryId: null,
  },
  extraReducers: {
    [noticesOperations.fetchNoticesForAll.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload.notices;
    },
    [noticesOperations.fetchNoticesOwn.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload.notices;
    },
    [noticesOperations.fetchNoticesFavorites.fulfilled](state, action) {
      state.error = null;
      state.items = action.payload.favorites;
    },
    [noticesOperations.setPattern.fulfilled](state, action) {
      state.error = null;
      state.pattern = action.payload.pattern;
    },
    [noticesOperations.setCategoryId.fulfilled](state, action) {
      state.error = null;
      state.categoryId = action.payload.categoryId;
    },
    [noticesOperations.setPage.fulfilled](state, action) {
      state.error = null;
      state.page = action.payload.page;
    },
  },
});

export default noticesSlice.reducer;
