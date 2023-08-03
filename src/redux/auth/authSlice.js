import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  error: null,
  userModal: false,
  isNewUser: true,
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.registrationUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(authOperations.registrationUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isNewUser = true;
        state.isLoading = false;
      })
      .addCase(authOperations.registrationUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(authOperations.loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(authOperations.loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isNewUser = false;
        state.isLoading = false;
      })
      .addCase(authOperations.loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(authOperations.logoutUser.fulfilled, (state, action) => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isNewUser = false;
      })
      .addCase(authOperations.refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isNewUser = false;
      })
      .addCase(authOperations.updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export default authSlice.reducer;
