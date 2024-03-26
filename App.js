import {View, Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {envSetup} from './src/utils/EnvSetup';
import {Provider as ReduxProvider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {persistor} from './src/redux/store';
import store from './src/redux/store/index';
import RootNavigator from './src/routes';
import CheckConnection from './src/utils/CheckInternet';
import InternetErrorCard from './src/errorBoundary/InternetErrorCard';
import {
  selectCurrentLang,
  selectCurrentTheme,
} from './src/redux/slice/ConfigSlice';
import AppStrings from './src/res/AppStrings';
import {darkTheme, lightTheme} from './src/res/styles/theme';

function App() {
  // const appLang = useSelector(selectCurrentLang);
  const appLang = useSelector(selectCurrentLang);
  const appTheme = useSelector(selectCurrentTheme);

  useEffect(() => {
    setDefaultData(appLang);
  }, []);

  setDefaultData = appLang => {
    // AppStrings.setLanguage(appLang);
  };

  let network = CheckConnection();
  if (network === false) {
    return <InternetErrorCard />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={appTheme === 'dark' ? darkTheme : lightTheme}>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);
