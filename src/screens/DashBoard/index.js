import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {scale, verticalScale} from 'react-native-size-matters';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';

import palette from '../../res/Palette';
import {selectCurrentUser} from '../../redux/slice/authSlice';
import {useGetAuthUserTempQuery} from '../../api/login';
import {
  selectCurrentLang,
  selectCurrentTheme,
  setLang,
  setTheme,
} from '../../redux/slice/ConfigSlice';
import AppStrings from '../../res/AppStrings';
import {Amount, ButtonText} from '../../res/styles/text';
import {Container} from '../../res/styles/view';
import {AppButton} from '../../res/styles/buttons';

const DashBoard = () => {
  const userEmail = useSelector(selectCurrentUser);
  const appLang = useSelector(selectCurrentLang);
  const appTheme = useSelector(selectCurrentTheme);

  const {data, isLoading, isError, isFetching} = useGetAuthUserTempQuery(1, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: false,
  });
  const dispatch = useDispatch();
  const onLanguagePress = () => {
    dispatch(setLang(appLang == 'hi' ? 'en' : 'hi'));
  };

  const onThemePressed = () => {
    dispatch(setTheme(appTheme == 'dark' ? 'light' : 'dark'));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Container>
        <Text style={styles.hiText}>Hii, there</Text>
        <Text style={styles.name}>
          USER ID : {JSON.stringify(userEmail?.id)}
        </Text>
        <ButtonText>{appLang}</ButtonText>
        <ButtonText style={styles.text}>{AppStrings.lang}</ButtonText>
        <AppButton onPress={onLanguagePress} style={{marginBottom: 20}}>
          <ButtonText>Language</ButtonText>
        </AppButton>
        <ButtonText>We are on {appTheme} mode!</ButtonText>
        <AppButton onPress={onThemePressed}>
          <ButtonText>Theme</ButtonText>
        </AppButton>
      </Container>
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
