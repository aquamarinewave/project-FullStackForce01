const loggedInSelector = state => state.auth.isLoggedIn;
const userSelector = state => state.auth.user;
const userNameSelector = state => state.auth.user.name;
const userAvatarSelector = state => state.auth.user.avatarURL;
const newUserSelector = state => state.auth.isNewUser;
const userErrorSelector = state => state.auth.error;
const loadingSelector = state => state.auth.isLoading;

const authSelector = {
    loggedInSelector,
    userSelector,
    userNameSelector,
    userAvatarSelector,
    userErrorSelector,
    newUserSelector,
    loadingSelector,
};

export default authSelector;