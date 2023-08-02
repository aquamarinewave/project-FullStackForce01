import { createSlice } from '@reduxjs/toolkit';

import noticesOperations from './operation';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    error: null,
    pattern: '',
    categoryId: null,
    currentPage: 1,
    perPage: 12,
    totalPages: 0,
  },
  extraReducers: {
    [noticesOperations.fetchNoticesForAll.fulfilled](state, action) {
      state.error = null;
      const { notices, totalCount } = action.payload;
      state.items = notices;
      state.totalPages = Math.ceil(totalCount / state.perPage);
    },
    [noticesOperations.fetchNoticesOwn.fulfilled](state, action) {
      state.error = null;
      const { notices, totalCount } = action.payload;
      state.items = notices;
      state.totalPages = Math.ceil(totalCount / state.perPage);
    },
    [noticesOperations.fetchNoticesFavorites.fulfilled](state, action) {
      state.error = null;
      const { favorites, totalCount } = action.payload;
      state.items = favorites;
      state.totalPages = Math.ceil(totalCount / state.perPage);
    },
    [noticesOperations.deleteUserNotice.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(index => index._id === action.meta.arg);
      state.items.splice(index, 1);
    },
    [noticesOperations.setPattern.fulfilled](state, action) {
      state.error = null;
      state.pattern = action.payload;
    },
    [noticesOperations.setCategoryId.fulfilled](state, action) {
      state.error = null;
      state.categoryId = action.payload;
    },
    [noticesOperations.setCurrentPage.fulfilled](state, action) {
      state.error = null;
      state.setCurrentPage = action.payload;
    },

    [noticesOperations.fetchModalDetails.fulfilled](state, action) {
      state.error = null;
      state.favorite = action.payload;
    },

    [noticesOperations.fetchAddToFavorite.fulfilled](state, action) {
      state.error = null;
      const item = state.items.find(item => item._id === action.payload);
      item.favorite = true;
    },

    [noticesOperations.fetchDeleteToFavorite.fulfilled](state, action) {
      state.error = null;
      const item = state.items.find(item => item._id === action.payload);
      if (item) item.favorite = false;
    },

    [noticesOperations.removeNotice.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(item => item._id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export default noticesSlice.reducer;
