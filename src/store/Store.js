import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

//no need to save data using key anymore
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const sagaMiddleware = createSagaMiddleware();
const middleware = [];
// --------in this project we can use both async and flow functions----------
middleware.push(sagaMiddleware); //for flow actions
middleware.push(thunk); //for async actions
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(...middleware));
let persistor = persistStore(store);

export {store, persistor, sagaMiddleware};
