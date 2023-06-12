import {createSlice} from '@reduxjs/toolkit';
import {authApi} from '../../api/login/index';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null, permissions: null},
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
    setPermissions: (state, action) => {
      const permissions = action.payload;
      state.permissions = permissions;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.token = payload.data?.token;
        state.user = payload.data?.user;
        state.permissions = payload.data?.user_module;
      },
    );
    builder.addMatcher(
      authApi.endpoints.getAuthUser.matchFulfilled,
      (state, {payload}) => {
        state.user = payload.data?.info;
        state.permissions = payload.data?.permission;
      },
    );
  },
});

export const selectCurrentUser = state => state?.auth?.user;
export const selectCurrentToken = state => state?.auth?.token;
export const selectAuth = state => state.auth;

export const {setUser, setToken, setPermissions} = authSlice.actions;

export default authSlice.reducer;
