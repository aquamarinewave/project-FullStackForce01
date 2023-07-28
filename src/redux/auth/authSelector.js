const loggedInSelector = state => state.auth.isLoggedIn;
const userSelector = state => state.auth.user;
const userNameSelector = state => state.auth.user.name;
const userAvatarSelector = state => state.auth.user.avatarURL;
const userErrorSelector = state => state.auth.error;

const authSelector = {
    loggedInSelector,
    userSelector,
    userNameSelector,
    userAvatarSelector,
    userErrorSelector
};

export default authSelector;