const selectNews = state => state.news;
const selectNewsError = state => state.news.error;

const newsSelector = {
  selectNews,
  selectNewsError,
};

export default newsSelector;
