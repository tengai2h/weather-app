import { GET_CARDS, UPDATE_CARD } from './actionTypes';
import { IWeather } from 'types/weatherType';

export interface GetCardsCreatorType {
  type: typeof GET_CARDS;
  payload: IWeather[];
}

export interface UpdateCardsCreatorType {
  type: typeof UPDATE_CARD;
  payload: IWeather;
}
