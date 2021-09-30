import * as React from 'react';
import {Text, View} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import initStore from './src/redux/store';
import StoreDetail from './src/Screens/StoreDetail';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StoreDetail />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
