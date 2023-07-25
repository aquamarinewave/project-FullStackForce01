const loggedInSelector = state => state.auth.isLoggedIn;
const userSelector = state => state.auth.user;
const userNameSelector = state => state.auth.user.name;
const userAvatarSelector = state => state.auth.user.avatarURL;


const authSelectors = {
    loggedInSelector,
    userSelector,
    userNameSelector,
    userAvatarSelector
};

export default authSelectors;