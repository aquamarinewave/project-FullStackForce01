import { createSlice } from '@reduxjs/toolkit';

import noticesOperations from './operation';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    favorite: {},
    isSelected: false,
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
      state.items = notices.reverse();
      state.totalPages = Math.ceil(totalCount / state.perPage);
    },
    [noticesOperations.fetchNoticesOwn.fulfilled](state, action) {
      state.error = null;
      const { notices, totalCount } = action.payload;
      state.items = notices.reverse();
      state.totalPages = Math.ceil(totalCount / state.perPage);
    },
    [noticesOperations.fetchNoticesFavorites.fulfilled](state, action) {
      state.error = null;
      const { favorites, totalCount } = action.payload;
      state.items = favorites.reverse();
      state.totalPages = Math.ceil(totalCount / state.perPage);
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
      state.isSelected = action.payload;
    },

    [noticesOperations.setIsSelected.fulfilled](state, action) {
      state.error = null;
      state.isSelected = action.payload;
    },

    [noticesOperations.fetchDeleteToFavorite.fulfilled](state, action) {
      state.error = null;
      state.isSelected = action.payload;
      // const index = state.items.findIndex(item => item.id === action.payload.id);      
      // state.items.splice(index, 1); 
    },
  },
});

export default noticesSlice.reducer;
