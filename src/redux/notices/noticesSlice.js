import { createSlice } from '@reduxjs/toolkit';

import noticesOperations from './operation';

const noticesList = {
  items: [],
  error: null,
  pattern: '',
  categoryId: null,
  currentPage: 1,
  perPage: 12,
  totalPages: 0,
  details: {
    notice: null,
    user: null,
  },
};

const handleFulfielldNoticesAll = (state, action) => {
  state.error = null;
  const { notices, totalCount } = action.payload;
  state.items = notices;
  state.totalPages = Math.ceil(totalCount / state.perPage);
};
const handleFulfielldNoticesOwn = (state, action) => {
  state.error = null;
  const { notices, totalCount } = action.payload;
  state.items = notices;
  state.totalPages = Math.ceil(totalCount / state.perPage);
};
const handleFulfielldNoticesFavor = (state, action) => {
  state.error = null;
  const { favorites, totalCount } = action.payload;
  state.items = favorites;
  state.totalPages = Math.ceil(totalCount / state.perPage);
};
const handleFulfielldDelUserNotice = (state, action) => {
  state.error = null;
  const index = state.items.findIndex(index => index._id === action.meta.arg);
  state.items.splice(index, 1);
};
const handleFulfielldPattern = (state, action) => {
  state.error = null;
  state.pattern = action.payload;
};
const handleFulfielldCategoryId = (state, action) => {
  state.error = null;
  state.categoryId = action.payload;
};
const handleFulfielldCurrentPage = (state, action) => {
  state.error = null;
  state.currentPage = action.payload;
};

const handleFulfielldModalDetails = (state, action) => {
  state.error = null;
  state.details = action.payload;
};

const handleFulfielldAddToFavorite = (state, action) => {
  state.error = null;
  const item = state.items.find(item => item._id === action.payload);
  item.favorite = true;
};

const handleFulfielldDeleteToFavorite = (state, action) => {
  state.error = null;
  const item = state.items.find(item => item._id === action.payload);
  if (item) item.favorite = false;
};

const handleFulfielldDelNotice = (state, action) => {
  state.error = null;
  const index = state.items.findIndex(item => item._id === action.payload);
  state.items.splice(index, 1);
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesList,

  extraReducers: builder => {
    builder
      .addCase(noticesOperations.fetchNoticesForAll.fulfilled, handleFulfielldNoticesAll)
      .addCase(noticesOperations.fetchNoticesOwn.fulfilled, handleFulfielldNoticesOwn)
      .addCase(noticesOperations.fetchNoticesFavorites.fulfilled, handleFulfielldNoticesFavor)
      .addCase(noticesOperations.deleteUserNotice.fulfilled, handleFulfielldDelUserNotice)
      .addCase(noticesOperations.setCategoryId.fulfilled, handleFulfielldCategoryId)
      .addCase(noticesOperations.setPattern.fulfilled, handleFulfielldPattern)
      .addCase(noticesOperations.setCurrentPage.fulfilled, handleFulfielldCurrentPage)
      .addCase(noticesOperations.fetchModalDetails.fulfilled, handleFulfielldModalDetails)
      .addCase(noticesOperations.fetchAddToFavorite.fulfilled, handleFulfielldAddToFavorite)
      .addCase(noticesOperations.fetchDeleteToFavorite.fulfilled, handleFulfielldDeleteToFavorite)
      .addCase(noticesOperations.removeNotice.fulfilled, handleFulfielldDelNotice);
  },
});

export default noticesSlice.reducer;
