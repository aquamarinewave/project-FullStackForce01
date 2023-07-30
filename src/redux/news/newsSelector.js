const selectNews = state => state.news;
const selectPattern = state => state.pattern;
const selectCurrentPage = state => state.currentPage;
const selectNewsError = state => state.news.error;
const selectTotalPages = state => state.totalPages;

const newsSelector = {
  selectNews,
  selectPattern,
  selectCurrentPage,
  selectNewsError,
  selectTotalPages,
};

export default newsSelector;
