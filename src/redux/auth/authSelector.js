export const userSelector = state => state.auth.user;
export const userNameSelector = state => state.auth.user.name;
export const userAvatarSelector = state => state.auth.user.avatarURL;
export const loggedInSelector = state => state.auth.isLoggedIn;
