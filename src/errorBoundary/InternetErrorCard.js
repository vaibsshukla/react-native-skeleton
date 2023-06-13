import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
const InternetErrorCard = () => {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.errorHead}>Connection Error</Text>
        <Text style={styles.subText}>
          Please check your network connectivity and try again
        </Text>
      </View>
    </View>
  );
};

export default InternetErrorCard;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column',
  },
  errorContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    justifyContent: 'center',
  },
  rootContainer: {justifyContent: 'flex-start', padding: 10},
  img: {height: 120, width: 120},
  textContainer: {
    alignItems: 'center',
  },
  title: {marginBottom: 10, fontSize: 20, fontWeight: 'bold'},
  errorHead: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});
