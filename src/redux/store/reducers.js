import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from '../../api/base/baseApi';
import {reducer as formReducer} from 'redux-form';
import {configSlice} from '../slice/ConfigSlice';
import {authSlice} from '../slice/authSlice';

export const rootReducer = combineReducers({
  //   auth: authSlice.reducer,
  //   ui: uiSlice.reducer,
  // rtk-query reducers
  // Add the generated reducer as a specific top-level slice
  form: formReducer,
  // Auth: AuthReducer,
  auth: authSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  config: configSlice.reducer,
});
