const selectNotices = state => state.notices;
const selectNoticesError = state => state.notices.error;

const noticesSelector = {
  selectNotices,
  selectNoticesError,
};

export default noticesSelector;
