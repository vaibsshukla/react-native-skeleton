import {
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import CheckConnection from '../utils/CheckInternet';
import ErrorCard from '../errorBoundary/InternetErrorCard';

export const Loading = ({children, ...props}) => {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }

  if (!network) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="small" color="#0000ff" />
      </SafeAreaView>
    );
  } else {
    return;
  }
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: Dimensions.get('screen').width - 32,
    alignSelf: 'center',
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  name: {
    color: '#424242',
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    marginTop: 6,
    color: '#888',
  },
});
