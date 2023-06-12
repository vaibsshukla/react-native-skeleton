import React from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {selectAuth} from '../redux/slice/authSlice';
import {createStackNavigator} from '@react-navigation/stack';

const RootNavigator = () => {
  const isAuth = useSelector(selectAuth);
  console.log('isAuthisAuth' + JSON.stringify(isAuth));

  return true ? <AppNavigator /> : <AuthNavigator />;
  // return isAuth?.user ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
