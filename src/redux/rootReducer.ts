import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { cardReducer } from './cards/cardReducer';

const rootConfig = {
  key: 'root',
  storage,
  whiteList: ['weather'],
};

const cardsConfig = {
  key: 'weather',
  storage,
  whiteList: ['weatherCards'],
};

export const rootReducer = persistReducer(
  rootConfig,
  combineReducers({
    weather: persistReducer(cardsConfig, cardReducer),
  }),
);
