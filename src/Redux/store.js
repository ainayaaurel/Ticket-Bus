import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './Reducer/index';
const config = {
  key: 'busapps',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
);
export const persistor = persistStore(store);
