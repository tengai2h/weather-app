import { IWeather } from 'types/weatherType';

export interface WeatherState {
  isFulfilled: boolean;
  weatherCards: IWeather[];
}
