import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BookingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>BookingScreen</Text>
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
