const selectFriends = state => state.friends;
const selectFriendsError = state => state.friends.error;

const friendsSelector = {
  selectFriends,
  selectFriendsError,
};

export default friendsSelector;
