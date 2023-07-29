const selectNews = state => state.news;
const selectPattern = state => state.pattern;
const selectPage = state => state.page;
const selectNewsError = state => state.news.error;

const newsSelector = {
  selectNews,
  selectPattern,
  selectPage,
  selectNewsError,
};

export default newsSelector;
