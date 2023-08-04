const selectNotices = state => state.notices;
const selectNoticesError = state => state.notices.error;
const selectNoticeDetails = state => state.notices.details;

const noticesSelector = {
  selectNotices,
  selectNoticesError,
  selectNoticeDetails,
};

export default noticesSelector;
