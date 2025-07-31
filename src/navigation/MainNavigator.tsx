import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './TabNavigator';

const Main = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tabs" component={TabNavigator} />
    </Main.Navigator>
  );
};

export default MainNavigator;
