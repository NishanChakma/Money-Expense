import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor, sagaMiddleware} from './store/Store';
import rootSaga from './store/Sagas';

import RootNavigator from './navigation/RootNavigator';

sagaMiddleware.run(rootSaga);

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
