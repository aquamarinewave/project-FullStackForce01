const selectNotices = state => state.notices;
const selectPattern = state => state.pattern;
const selectPage = state => state.page;
const selectCategoryId = state => state.categoryId;
const selectNoticesError = state => state.notices.error;

const noticesSelector = {
  selectNotices,
  selectPattern,
  selectPage,
  selectNoticesError,
  selectCategoryId,
};

export default noticesSelector;
