import { State } from 'redux/types';
import { createSelector } from 'reselect';

import { WeatherState } from './types';

export const weatherSelector = (state: State): WeatherState =>
  state.weather;

export const weatherCardsSelector = createSelector(
  weatherSelector,
  ({ weatherCards }) => weatherCards,
);
