import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {scale, verticalScale} from 'react-native-size-matters';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';

import palette from '../../res/Palette';
import {selectCurrentUser} from '../../redux/slice/authSlice';
import {useGetAuthUserQuery} from '../../api/login';
import {
  selectCurrentLang,
  setLang,
  setTheme,
} from '../../redux/slice/ConfigSlice';

const DashBoard = () => {
  const userEmail = useSelector(selectCurrentUser);
  const appLang = useSelector(selectCurrentLang);

  const {data, isLoading, isError, isFetching} = useGetAuthUserQuery(1, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: false,
  });
  const dispatch = useDispatch();
  const onLanguagePress = () => {
    dispatch(setLang(appLang == 'en' ? 'en' : 'hi'));
  };

  const onThemePressed = () => {
    dispatch(setTheme('day'));
  };

  console.log(
    'isFetching' + JSON.stringify({data, isLoading, isError, isFetching}),
  );

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.hiText}>Hii, there</Text>
      <Text style={styles.name}>USER ID : {JSON.stringify(userEmail?.id)}</Text>
      {/* <Text style={styles.name}>USER ID : {JSON.stringify(isFetching)}</Text> */}
      <Button title="Language" onPress={onLanguagePress} />
      <Button title="Switch to Dark Mode" onPress={() => null} />
      <Text style={styles.text}>We are on Light mode!</Text>

      <Button title="Theme" onPress={onThemePressed} />
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  hiText: {
    color: palette.primary,
    marginTop: scale(10),
    marginLeft: scale(15),
    fontSize: verticalScale(22),
  },
  name: {
    marginTop: scale(10),
    marginLeft: scale(15),
    color: palette.text,
    fontSize: verticalScale(18),
  },
  logoutIcon: {
    marginRight: scale(10),
  },
});
