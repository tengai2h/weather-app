import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { cardReducer } from './cards/cardReducer';

const rootConfig = {
  key: 'root',
  storage,
  whiteList: ['weatherCards'],
};

const cardsConfig = {
  key: 'weatherCards',
  storage,
};

export const rootReducer = persistReducer(
  rootConfig,
  combineReducers({
    weather: persistReducer(cardsConfig, cardReducer),
  }),
);
