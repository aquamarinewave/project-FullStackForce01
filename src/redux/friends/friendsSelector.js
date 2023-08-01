const selectFriends = state => state.friends;
const selectFriendsError = state => state.friends.error;
const loadingSelector = state => state.friends.isLoading;

const friendsSelector = {
  selectFriends,
  selectFriendsError,
  loadingSelector,
};

export default friendsSelector;
