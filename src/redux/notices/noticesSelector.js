const selectNotices = state => state.notices;
const selectNoticesError = state => state.notices.error;
const getNotice = state => state.notices.favorite;

const noticesSelector = {
  selectNotices,
  selectNoticesError,
  getNotice,
};

export default noticesSelector;
