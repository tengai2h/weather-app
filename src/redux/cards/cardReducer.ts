import { GET_CARDS, REMOVE_CARD, UPDATE_CARD } from './actionTypes';
import { WeatherState } from './types';
import { IWeather } from 'types/weatherType';

const initialState: WeatherState = {
  weatherCards: [],
};

export const cardReducer = (
  state = initialState,
  action: any,
): WeatherState => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        weatherCards: [...state.weatherCards, action.payload],
      };

    case REMOVE_CARD:
      return {
        ...state,
        weatherCards: state.weatherCards.filter(
          (weatherCard: IWeather) =>
            weatherCard.id !== action.payload.city,
        ),
      };

    case UPDATE_CARD:
      return {
        ...state,
        weatherCards: state.weatherCards.map(
          (weatherCard: IWeather) =>
            weatherCard.name === action.payload.name
              ? action.payload
              : weatherCard,
        ),
      };

    default:
      return state;
  }
};
