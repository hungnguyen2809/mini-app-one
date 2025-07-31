import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Host application is loading. Please wait...
      </Text>
      <ActivityIndicator color={'blue'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 24,
    color: 'blue',
    textAlign: 'center',
  },
  progress: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
});

export default SplashScreen;
