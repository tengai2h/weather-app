import { GetCardsCreatorType, UpdateCardsCreatorType } from './types';
import { GET_CARDS, UPDATE_CARD } from './actionTypes';
import { IWeather } from 'types/weatherType';

export const getCardsCreator = (
  weatherCards: IWeather[],
): GetCardsCreatorType => ({
  type: GET_CARDS,
  payload: weatherCards,
});

export const updateCardsCreator = (
  weatherCard: IWeather,
): UpdateCardsCreatorType => ({
  type: UPDATE_CARD,
  payload: weatherCard,
});
