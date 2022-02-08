import { GetCardsCreatorType, UpdateCardsCreatorType } from './actionCreatorsInterfaces';
import { GET_CARDS, UPDATE_CARD, SET_IS_FULFILLED } from './actionTypes';
import { IWeather } from 'types/weatherType';

export const getCardsCreator = (weatherCards: IWeather[]): GetCardsCreatorType => ({
  type: GET_CARDS,
  payload: weatherCards,
});

export const updateCardsCreator = (weatherCard: IWeather): UpdateCardsCreatorType => ({
  type: UPDATE_CARD,
  payload: weatherCard,
});

export const setIsFulfilled = () => ({
  type: SET_IS_FULFILLED,
});
