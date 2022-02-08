import axios from 'axios';
import { Dispatch } from 'redux';

import { REMOVE_CARD } from './actionTypes';
import { API_KEY } from 'constant/weatherAPIKey';
import { getCardsCreator, updateCardsCreator } from './actionCreators';

export const getWeatherCard = (city: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
      );

      dispatch(getCardsCreator(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeCard = (city: number) => {
  return { type: REMOVE_CARD, payload: { city } };
};

export const updateCardAsync =
  (city: string) =>
    async (dispatch: Dispatch): Promise<void> => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
        );

        dispatch(updateCardsCreator(data));
      } catch (error) {
        console.log(error);
      }
    };
    