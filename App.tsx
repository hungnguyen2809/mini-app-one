import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ErrorBoundary from './src/components/ErrorBoundary';
import SplashScreen from './src/components/SplashScreen';
import MainNavigator from './src/navigation/MainNavigator';

const App: React.FC = () => {
  return (
    <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen />}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
