import {configureStore, createAction} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootReducer} from './reducers';
import {name as projectName} from '../../../app.json';
import logger from 'redux-logger';
import setupListeners from './setupListeners';

// import {authSlice} from 'redux/features/auth';
import {apiSlice} from '../../api/base';

const persistConfig = {
  key: `${projectName}`,
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth', 'config'],
};

// action to reset store (generally on logout)
const resetAction = createAction('RESET_STORE');

const resettableRootReducer = (state, action) => {
  if (resetAction.match(action)) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableRootReducer);

const middleware = [apiSlice.middleware];
if (__DEV__) middleware.push(logger);

const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export {resetAction};

export default store;
