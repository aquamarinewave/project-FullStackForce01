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
    [noticesOperations.deleteUserNotice.fulfilled](state, action) {
      const index = state.items.findIndex(index => index.id !== action.payload.id);
      state.error = null;
      state.items = state.items.splice(index, 1);
    },
    [noticesOperations.setPattern.fulfilled](state, action) {
      state.error = null;
      state.pattern = action.payload;
    },
    [noticesOperations.setCategoryId.fulfilled](state, action) {
      state.error = null;
      state.categoryId = action.payload;
    },
    [noticesOperations.setPage.fulfilled](state, action) {
      state.error = null;
      state.page = action.payload;
    },
  },
});

export default noticesSlice.reducer;
