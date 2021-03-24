import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor, sagaMiddleware} from './store/Store';
import rootSaga from './store/Sagas';

import RootNavigator from './navigation/RootNavigator';

sagaMiddleware.run(rootSaga);

// Ignore Logs - NOT GOOD ))) TODO these bugs
LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);
LogBox.ignoreLogs(['DevTools failed to load SourceMap:']);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
            <StatusBar
              barStyle="light-content"
              translucent
              backgroundColor={'#cc0000'}
            />
            <RootNavigator />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
