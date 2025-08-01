import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BookingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>BookingScreen</Text>
      <Text>Mini App</Text>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
