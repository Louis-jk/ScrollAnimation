import * as React from 'react';
import {Text, View} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import StoreDetail from './src/Screens/StoreDetail';

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreDetail />
    </SafeAreaProvider>
  );
};

export default App;
