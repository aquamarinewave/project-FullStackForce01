import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registrationUser.fulfilled] (state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },
    [authOperations.loginUser.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
     },
    [authOperations.logoutUser.fulfilled](state, action) {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
        state.user = action.payload.user;
        state.isLoggedIn = true;
    },
},
});

export default authSlice.reducer;