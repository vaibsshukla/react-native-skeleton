import React, {useEffect} from 'react';
import {envSetup} from './src/utils/EnvSetup';
import {Provider as ReduxProvider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import {persistor} from './src/redux/store';
import store from './src/redux/store/index';
import RootNavigator from './src/routes';
import CheckConnection from './src/utils/CheckInternet';
import ErrorCard from './src/errorBoundary/InternetErrorCard';

function App() {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }

  return <RootNavigator />;
}

export default () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);
