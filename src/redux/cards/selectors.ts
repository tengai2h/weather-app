import { State } from 'redux/types';
import { createSelector } from 'reselect';

import { WeatherState } from './cardReducerTypes';

export const weatherSelector = (state: State): WeatherState => state.weather;

export const isFulfilledSelector = createSelector(weatherSelector, ({ isFulfilled }) => isFulfilled);
export const weatherCardsSelector = createSelector(weatherSelector, ({ weatherCards }) => weatherCards);
